# Forecast direct test

require "minitest/autorun"
require "json"
require_relative "../WeatherDataApi3_sdk"
require_relative "runner"

class ForecastDirectTest < Minitest::Test
  def test_direct_load_forecast
    setup = forecast_direct_setup({ "id" => "direct01" })
    _should_skip, _reason = Runner.is_control_skipped("direct", "direct-load-forecast", setup[:live] ? "live" : "unit")
    if _should_skip
      skip(_reason || "skipped via sdk-test-control.json")
      return
    end
    client = setup[:client]

    params = {}
    query = {}
    if setup[:live]
      query["latitude"] = 52.52
      query["longitude"] = 13.41
    end

    result, err = client.direct({
      "path" => "forecast",
      "method" => "GET",
      "params" => params,
      "query" => query,
    })
    if setup[:live]
      # Live mode is lenient: synthetic IDs frequently 4xx. Skip rather
      # than fail when the load endpoint isn't reachable with the IDs
      # we can construct from setup.idmap.
      if !err.nil?
        skip("load call failed (likely synthetic IDs against live API): #{err}")
        return
      end
      unless result["ok"]
        skip("load call not ok (likely synthetic IDs against live API)")
        return
      end
      status = Helpers.to_int(result["status"])
      if status < 200 || status >= 300
        skip("expected 2xx status, got #{status}")
        return
      end
    else
      assert_nil err
      assert result["ok"]
      assert_equal 200, Helpers.to_int(result["status"])
      assert !result["data"].nil?
      if result["data"].is_a?(Hash)
        assert_equal "direct01", result["data"]["id"]
      end
      assert_equal 1, setup[:calls].length
    end
  end

end


def forecast_direct_setup(mockres)
  Runner.load_env_local

  calls = []

  env = Runner.env_override({
    "WEATHERDATAAPI__TEST_FORECAST_ENTID" => {},
    "WEATHERDATAAPI__TEST_LIVE" => "FALSE",
    "WEATHERDATAAPI__APIKEY" => "NONE",
  })

  live = env["WEATHERDATAAPI__TEST_LIVE"] == "TRUE"

  if live
    merged_opts = {
      "apikey" => env["WEATHERDATAAPI__APIKEY"],
    }
    client = WeatherDataApi3SDK.new(merged_opts)
    return {
      client: client,
      calls: calls,
      live: true,
      idmap: {},
    }
  end

  mock_fetch = ->(url, init) {
    calls.push({ "url" => url, "init" => init })
    return {
      "status" => 200,
      "statusText" => "OK",
      "headers" => {},
      "json" => ->() {
        if !mockres.nil?
          return mockres
        end
        return { "id" => "direct01" }
      },
      "body" => "mock",
    }, nil
  }

  client = WeatherDataApi3SDK.new({
    "base" => "http://localhost:8080",
    "system" => {
      "fetch" => mock_fetch,
    },
  })

  {
    client: client,
    calls: calls,
    live: false,
    idmap: {},
  }
end
