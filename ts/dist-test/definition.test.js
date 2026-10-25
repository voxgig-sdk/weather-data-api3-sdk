"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "forecast",
        "accessor": "Forecast",
        "op": "load",
        "method": "GET",
        "path": "/forecast",
        "args": [],
        "select": {
            "latitude": 52.52,
            "longitude": 13.41,
            "current": "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure",
            "daily": "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_sum,precipitation_probability_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration",
            "hourly": "temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,vapour_pressure_deficit,et0_fao_evapotranspiration,visibility,evapotranspiration,cloud_cover_high,cloud_cover_mid,cloud_cover_low,cloud_cover,surface_pressure,pressure_msl,weather_code,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,wind_gusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm",
            "timezone": "auto"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "latitude",
            "longitude",
            "current",
            "hourly",
            "daily",
            "timezone"
        ],
        "queryArgs": [
            {
                "name": "current",
                "wire": "current"
            },
            {
                "name": "daily",
                "wire": "daily"
            },
            {
                "name": "hourly",
                "wire": "hourly"
            },
            {
                "name": "latitude",
                "wire": "latitude"
            },
            {
                "name": "longitude",
                "wire": "longitude"
            },
            {
                "name": "timezone",
                "wire": "timezone"
            }
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
                "time": "iso8601",
                "interval": "seconds",
                "temperature_2m": "°C",
                "relative_humidity_2m": "%",
                "apparent_temperature": "°C",
                "is_day": "x",
                "wind_speed_10m": "km/h",
                "wind_direction_10m": "°",
                "wind_gusts_10m": "km/h",
                "precipitation": "mm",
                "rain": "mm",
                "showers": "mm",
                "snowfall": "cm",
                "weather_code": "wmo code",
                "cloud_cover": "%",
                "pressure_msl": "hPa",
                "surface_pressure": "hPa"
            },
            "current": {
                "time": "2026-01-01T00:00:00Z",
                "interval": 1,
                "temperature_2m": 1,
                "relative_humidity_2m": 1,
                "apparent_temperature": 1,
                "is_day": 1,
                "wind_speed_10m": 1,
                "wind_direction_10m": 1,
                "wind_gusts_10m": 1,
                "precipitation": 1,
                "rain": 1,
                "showers": 1,
                "snowfall": 1,
                "weather_code": 1,
                "cloud_cover": 1,
                "pressure_msl": 1,
                "surface_pressure": 1
            },
            "hourly_units": {
                "time": "iso8601",
                "temperature_2m": "°C",
                "relative_humidity_2m": "%",
                "dew_point_2m": "°C",
                "apparent_temperature": "°C",
                "precipitation_probability": "%",
                "precipitation": "mm",
                "rain": "mm",
                "showers": "mm",
                "snowfall": "cm",
                "snow_depth": "m",
                "weather_code": "wmo code",
                "cloud_cover": "%",
                "visibility": "m",
                "wind_speed_10m": "km/h",
                "wind_direction_10m": "°",
                "wind_gusts_10m": "km/h"
            },
            "hourly": {
                "time": [
                    "2026-01-01T00:00:00Z"
                ],
                "temperature_2m": [
                    1
                ],
                "relative_humidity_2m": [
                    1
                ],
                "dew_point_2m": [
                    1
                ],
                "apparent_temperature": [
                    1
                ],
                "precipitation_probability": [
                    1
                ],
                "precipitation": [
                    1
                ],
                "rain": [
                    1
                ],
                "showers": [
                    1
                ],
                "snowfall": [
                    1
                ],
                "snow_depth": [
                    1
                ],
                "weather_code": [
                    1
                ],
                "cloud_cover": [
                    1
                ],
                "visibility": [
                    1
                ],
                "wind_speed_10m": [
                    1
                ],
                "wind_direction_10m": [
                    1
                ],
                "wind_gusts_10m": [
                    1
                ]
            },
            "daily_units": {
                "time": "iso8601",
                "weather_code": "wmo code",
                "temperature_2m_max": "°C",
                "temperature_2m_min": "°C",
                "apparent_temperature_max": "°C",
                "apparent_temperature_min": "°C",
                "sunrise": "iso8601",
                "sunset": "iso8601",
                "precipitation_sum": "mm",
                "rain_sum": "mm",
                "snowfall_sum": "cm",
                "wind_speed_10m_max": "km/h",
                "wind_gusts_10m_max": "km/h"
            },
            "daily": {
                "time": [
                    "2026-01-01"
                ],
                "weather_code": [
                    1
                ],
                "temperature_2m_max": [
                    1
                ],
                "temperature_2m_min": [
                    1
                ],
                "apparent_temperature_max": [
                    1
                ],
                "apparent_temperature_min": [
                    1
                ],
                "sunrise": [
                    "2026-01-01T00:00:00Z"
                ],
                "sunset": [
                    "2026-01-01T00:00:00Z"
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
                "wind_speed_10m_max": [
                    1
                ],
                "wind_gusts_10m_max": [
                    1
                ]
            }
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map