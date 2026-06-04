# WeatherDataApi3 SDK

Free weather forecasts and historical weather data from 30+ global and regional models, no API key required

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Weather Data API

[Open-Meteo](https://open-meteo.com/) is an open-source weather API that aggregates forecasts from 30+ national and global numerical weather models (including ECMWF, GFS, HRRR, DWD ICON, and Meteo-France ARPEGE/AROME) into a single JSON interface. It also exposes ERA5 reanalysis data going back to 1940. No API key or signup is required for the free tier.

What you get from the API:

- Hourly variables: 2m temperature, relative humidity, dewpoint, apparent temperature, precipitation, wind speed and direction at multiple heights, cloud cover, pressure, and solar radiation components.
- Daily aggregations: min/max temperature, precipitation totals, sunrise and sunset, sunshine duration, wind summaries, and UV index.
- Current conditions: instantaneous temperature, humidity, apparent temperature, precipitation, weather code, and day/night flag.
- Location metadata: resolved latitude/longitude, elevation, timezone, and units for every returned variable.

Operational notes: the base server is `https://api.open-meteo.com/v1`, requests are plain HTTP GETs with no auth header, and CORS is enabled for browser use. The free tier permits non-commercial use up to about 10,000 calls per day; commercial or higher-volume usage moves to a paid plan documented on the homepage.

## Try it

**TypeScript**
```bash
npm install weather-data-api3
```

**Python**
```bash
pip install weather-data-api3-sdk
```

**PHP**
```bash
composer require voxgig/weather-data-api3-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/weather-data-api3-sdk/go
```

**Ruby**
```bash
gem install weather-data-api3-sdk
```

**Lua**
```bash
luarocks install weather-data-api3-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { WeatherDataApi3SDK } from 'weather-data-api3'

const client = new WeatherDataApi3SDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o weather-data-api3-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "weather-data-api3": {
      "command": "/abs/path/to/weather-data-api3-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Forecast** | Numerical weather predictions for a given latitude/longitude, served from `/v1/forecast` with selectable `hourly`, `daily`, and `current` variable sets and optional timezone handling. | `/forecast` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from weatherdataapi3_sdk import WeatherDataApi3SDK

client = WeatherDataApi3SDK({})


# Load a specific forecast
forecast, err = client.Forecast(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'weatherdataapi3_sdk.php';

$client = new WeatherDataApi3SDK([]);


// Load a specific forecast
[$forecast, $err] = $client->Forecast(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/weather-data-api3-sdk/go"

client := sdk.NewWeatherDataApi3SDK(map[string]any{})

```

### Ruby

```ruby
require_relative "WeatherDataApi3_sdk"

client = WeatherDataApi3SDK.new({})


# Load a specific forecast
forecast, err = client.Forecast(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("weather-data-api3_sdk")

local client = sdk.new({})


-- Load a specific forecast
local forecast, err = client:Forecast(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = WeatherDataApi3SDK.test()
const result = await client.Forecast().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = WeatherDataApi3SDK.test(None, None)
result, err = client.Forecast(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = WeatherDataApi3SDK::test(null, null);
[$result, $err] = $client->Forecast(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Forecast(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = WeatherDataApi3SDK.test(nil, nil)
result, err = client.Forecast(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Forecast(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Weather Data API

- Upstream: [https://open-meteo.com/](https://open-meteo.com/)
- API docs: [https://open-meteo.com/en/docs](https://open-meteo.com/en/docs)

- Weather data is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — free to use and redistribute, including commercially, with attribution.
- Attribution to Open-Meteo (and, where applicable, the originating weather services such as DWD, ECMWF, NOAA, Meteo-France) is required.
- The server software itself is released under AGPLv3.
- Non-commercial use is free up to roughly 10,000 API calls per day; higher volumes and commercial use require a paid plan.

---

Generated from the Weather Data API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
