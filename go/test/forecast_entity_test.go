package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/weather-data-api3-sdk"
	"github.com/voxgig-sdk/weather-data-api3-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestForecastEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Forecast(nil)
		if ent == nil {
			t.Fatal("expected non-nil ForecastEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := forecastBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "forecast." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set WEATHERDATAAPI__TEST_FORECAST_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		forecastRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.forecast", setup.data)))
		var forecastRef01Data map[string]any
		if len(forecastRef01DataRaw) > 0 {
			forecastRef01Data = core.ToMapAny(forecastRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = forecastRef01Data

		// LOAD
		forecastRef01Ent := client.Forecast(nil)
		forecastRef01MatchDt0 := map[string]any{}
		forecastRef01DataDt0Loaded, err := forecastRef01Ent.Load(forecastRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if forecastRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func forecastBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "forecast", "ForecastTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read forecast test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse forecast test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"forecast01", "forecast02", "forecast03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("WEATHERDATAAPI__TEST_FORECAST_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"WEATHERDATAAPI__TEST_FORECAST_ENTID": idmap,
		"WEATHERDATAAPI__TEST_LIVE":      "FALSE",
		"WEATHERDATAAPI__TEST_EXPLAIN":   "FALSE",
		"WEATHERDATAAPI__APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["WEATHERDATAAPI__TEST_FORECAST_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["WEATHERDATAAPI__TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["WEATHERDATAAPI__APIKEY"],
			},
			extra,
		})
		client = sdk.NewWeatherDataApi3SDK(core.ToMapAny(mergedOpts))
	}

	live := env["WEATHERDATAAPI__TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["WEATHERDATAAPI__TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
