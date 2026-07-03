# WeatherDataApi3 SDK

Weather Data API client, generated from the OpenAPI spec.

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

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

## Quickstart

### TypeScript

```ts
import { WeatherDataApi3SDK } from 'weather-data-api3'

const client = new WeatherDataApi3SDK({
  apikey: process.env.WEATHER-DATA-API3_APIKEY,
})

// Load forecast data
const forecast = await client.Forecast().load({})
console.log(forecast.data)
```

See the [TypeScript README](ts/README.md) for the full guide.

## Surfaces

| Surface | Path |
| --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | `go-cli/` |
| **MCP server** | `go-mcp/` |

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
| **Forecast** |  | `/forecast` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
import os
from weatherdataapi3_sdk import WeatherDataApi3SDK

client = WeatherDataApi3SDK({
    "apikey": os.environ.get("WEATHER-DATA-API3_APIKEY"),
})


# Load a specific forecast
forecast, err = client.Forecast().load({"id": "example_id"})
print(forecast)
```

### PHP

```php
<?php
require_once 'weatherdataapi3_sdk.php';

$client = new WeatherDataApi3SDK([
    "apikey" => getenv("WEATHER-DATA-API3_APIKEY"),
]);


// Load a specific forecast
[$forecast, $err] = $client->Forecast()->load(["id" => "example_id"]);
print_r($forecast);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/weather-data-api3-sdk/go"

client := sdk.NewWeatherDataApi3SDK(map[string]any{
    "apikey": os.Getenv("WEATHER-DATA-API3_APIKEY"),
})

// Load forecast data
forecast, err := client.Forecast(nil).Load(map[string]any{}, nil)
fmt.Println(forecast)
```

### Ruby

```ruby
require_relative "WeatherDataApi3_sdk"

client = WeatherDataApi3SDK.new({
  "apikey" => ENV["WEATHER-DATA-API3_APIKEY"],
})


# Load a specific forecast
forecast, err = client.Forecast().load({ "id" => "example_id" })
puts forecast
```

### Lua

```lua
local sdk = require("weather-data-api3_sdk")

local client = sdk.new({
  apikey = os.getenv("WEATHER-DATA-API3_APIKEY"),
})


-- Load a specific forecast
local forecast, err = client:Forecast():load({ id = "example_id" })
print(forecast)
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
client = WeatherDataApi3SDK.test()
result, err = client.Forecast().load({"id": "test01"})
```

### PHP

```php
$client = WeatherDataApi3SDK::test();
[$result, $err] = $client->Forecast()->load(["id" => "test01"]);
```

### Golang

```go
client := sdk.Test()
result, err := client.Forecast(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = WeatherDataApi3SDK.test
result, err = client.Forecast().load({ "id" => "test01" })
```

### Lua

```lua
local client = sdk.test()
local result, err = client:Forecast():load({ id = "test01" })
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

---

Generated from the Weather Data API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
