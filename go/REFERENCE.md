# WeatherDataApi3 Golang SDK Reference

Complete API reference for the WeatherDataApi3 Golang SDK.


## WeatherDataApi3SDK

### Constructor

```go
func NewWeatherDataApi3SDK(options map[string]any) *WeatherDataApi3SDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *WeatherDataApi3SDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *WeatherDataApi3SDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Forecast(data map[string]any) WeatherDataApi3Entity`

Create a new `Forecast` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ForecastEntity

```go
forecast := client.Forecast(nil)
fmt.Println(forecast.GetName()) // "forecast"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current` | `map[string]any` | No |  |
| `current_units` | `map[string]any` | No |  |
| `daily` | `map[string]any` | No |  |
| `daily_units` | `map[string]any` | No |  |
| `elevation` | `float64` | No | Elevation of the location in meters |
| `generationtime_ms` | `float64` | No | Time taken to generate the response in milliseconds |
| `hourly` | `map[string]any` | No |  |
| `hourly_units` | `map[string]any` | No |  |
| `latitude` | `float64` | No | Latitude of the location |
| `longitude` | `float64` | No | Longitude of the location |
| `timezone` | `string` | No | Timezone identifier |
| `timezone_abbreviation` | `string` | No | Timezone abbreviation |
| `utc_offset_seconds` | `int` | No | UTC offset in seconds |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Forecast(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ForecastEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewWeatherDataApi3SDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

