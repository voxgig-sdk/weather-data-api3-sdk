import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "forecast",
    "accessor": "Forecast",
    "op": "load",
    "method": "GET",
    "path": "/forecast",
    "args": [],
    "select": {
      "current": "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure",
      "daily": "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_sum,precipitation_probability_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration",
      "hourly": "temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,vapour_pressure_deficit,et0_fao_evapotranspiration,visibility,evapotranspiration,cloud_cover_high,cloud_cover_mid,cloud_cover_low,cloud_cover,surface_pressure,pressure_msl,weather_code,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,wind_gusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm",
      "latitude": 52.52,
      "longitude": 13.41,
      "timezone": "auto"
    },
    "headers": [],
    "query": [
      "latitude",
      "longitude",
      "current",
      "hourly",
      "daily",
      "timezone"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "latitude": 1,
      "longitude": 1,
      "generationtime_ms": 1,
      "utc_offset_seconds": 1,
      "timezone": "x",
      "timezone_abbreviation": "x",
      "elevation": 1,
      "current_units": {
        "apparent_temperature": "°C",
        "cloud_cover": "%",
        "interval": "seconds",
        "is_day": "x",
        "precipitation": "mm",
        "pressure_msl": "hPa",
        "rain": "mm",
        "relative_humidity_2m": "%",
        "showers": "mm",
        "snowfall": "cm",
        "surface_pressure": "hPa",
        "temperature_2m": "°C",
        "time": "iso8601",
        "weather_code": "wmo code",
        "wind_direction_10m": "°",
        "wind_gusts_10m": "km/h",
        "wind_speed_10m": "km/h"
      },
      "current": {
        "apparent_temperature": 1,
        "cloud_cover": 1,
        "interval": 1,
        "is_day": 1,
        "precipitation": 1,
        "pressure_msl": 1,
        "rain": 1,
        "relative_humidity_2m": 1,
        "showers": 1,
        "snowfall": 1,
        "surface_pressure": 1,
        "temperature_2m": 1,
        "time": "2026-01-01T00:00:00Z",
        "weather_code": 1,
        "wind_direction_10m": 1,
        "wind_gusts_10m": 1,
        "wind_speed_10m": 1
      },
      "hourly_units": {
        "apparent_temperature": "°C",
        "cloud_cover": "%",
        "dew_point_2m": "°C",
        "precipitation": "mm",
        "precipitation_probability": "%",
        "rain": "mm",
        "relative_humidity_2m": "%",
        "showers": "mm",
        "snow_depth": "m",
        "snowfall": "cm",
        "temperature_2m": "°C",
        "time": "iso8601",
        "visibility": "m",
        "weather_code": "wmo code",
        "wind_direction_10m": "°",
        "wind_gusts_10m": "km/h",
        "wind_speed_10m": "km/h"
      },
      "hourly": {
        "apparent_temperature": [
          1
        ],
        "cloud_cover": [
          1
        ],
        "dew_point_2m": [
          1
        ],
        "precipitation": [
          1
        ],
        "precipitation_probability": [
          1
        ],
        "rain": [
          1
        ],
        "relative_humidity_2m": [
          1
        ],
        "showers": [
          1
        ],
        "snow_depth": [
          1
        ],
        "snowfall": [
          1
        ],
        "temperature_2m": [
          1
        ],
        "time": [
          "2026-01-01T00:00:00Z"
        ],
        "visibility": [
          1
        ],
        "weather_code": [
          1
        ],
        "wind_direction_10m": [
          1
        ],
        "wind_gusts_10m": [
          1
        ],
        "wind_speed_10m": [
          1
        ]
      },
      "daily_units": {
        "apparent_temperature_max": "°C",
        "apparent_temperature_min": "°C",
        "precipitation_sum": "mm",
        "rain_sum": "mm",
        "snowfall_sum": "cm",
        "sunrise": "iso8601",
        "sunset": "iso8601",
        "temperature_2m_max": "°C",
        "temperature_2m_min": "°C",
        "time": "iso8601",
        "weather_code": "wmo code",
        "wind_gusts_10m_max": "km/h",
        "wind_speed_10m_max": "km/h"
      },
      "daily": {
        "apparent_temperature_max": [
          1
        ],
        "apparent_temperature_min": [
          1
        ],
        "precipitation_sum": [
          1
        ],
        "rain_sum": [
          1
        ],
        "snowfall_sum": [
          1
        ],
        "sunrise": [
          "2026-01-01T00:00:00Z"
        ],
        "sunset": [
          "2026-01-01T00:00:00Z"
        ],
        "temperature_2m_max": [
          1
        ],
        "temperature_2m_min": [
          1
        ],
        "time": [
          "2026-01-01"
        ],
        "weather_code": [
          1
        ],
        "wind_gusts_10m_max": [
          1
        ],
        "wind_speed_10m_max": [
          1
        ]
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
