# WeatherDataApi3 PHP SDK Reference

Complete API reference for the WeatherDataApi3 PHP SDK.


## WeatherDataApi3SDK

### Constructor

```php
require_once __DIR__ . '/weatherdataapi3_sdk.php';

$client = new WeatherDataApi3SDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `WeatherDataApi3SDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = WeatherDataApi3SDK::test();
```


### Instance Methods

#### `Forecast($data = null)`

Create a new `ForecastEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): WeatherDataApi3Utility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ForecastEntity

```php
$forecast = $client->Forecast();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current` | `array` | No |  |
| `current_units` | `array` | No |  |
| `daily` | `array` | No |  |
| `daily_units` | `array` | No |  |
| `elevation` | `float` | No | Elevation of the location in meters |
| `generationtime_ms` | `float` | No | Time taken to generate the response in milliseconds |
| `hourly` | `array` | No |  |
| `hourly_units` | `array` | No |  |
| `latitude` | `float` | No | Latitude of the location |
| `longitude` | `float` | No | Longitude of the location |
| `timezone` | `string` | No | Timezone identifier |
| `timezone_abbreviation` | `string` | No | Timezone abbreviation |
| `utc_offset_seconds` | `int` | No | UTC offset in seconds |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Forecast()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ForecastEntity`

Create a new `ForecastEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new WeatherDataApi3SDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

