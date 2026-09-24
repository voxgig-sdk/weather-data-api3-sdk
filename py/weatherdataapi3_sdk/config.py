# WeatherDataApi3 SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "WeatherDataApi3",
            "slug": "weather-data-api3",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.open-meteo.com/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "forecast": {},
            },
        },
        "entity": {
      "forecast": {
        "fields": [
          {
            "name": "current",
            "title": "Current",
            "type": "`$OBJECT`",
          },
          {
            "name": "current_units",
            "title": "Current Units",
            "type": "`$OBJECT`",
          },
          {
            "name": "daily",
            "title": "Daily",
            "type": "`$OBJECT`",
          },
          {
            "name": "daily_units",
            "title": "Daily Units",
            "type": "`$OBJECT`",
          },
          {
            "name": "elevation",
            "title": "Elevation",
            "type": "`$NUMBER`",
            "short": "Elevation of the location in meters",
            "format": "float",
          },
          {
            "name": "generationtime_ms",
            "title": "Generationtime Ms",
            "type": "`$NUMBER`",
            "short": "Time taken to generate the response in milliseconds",
            "format": "float",
          },
          {
            "name": "hourly",
            "title": "Hourly",
            "type": "`$OBJECT`",
          },
          {
            "name": "hourly_units",
            "title": "Hourly Units",
            "type": "`$OBJECT`",
          },
          {
            "name": "latitude",
            "title": "Latitude",
            "type": "`$NUMBER`",
            "short": "Latitude of the location",
            "format": "float",
          },
          {
            "name": "longitude",
            "title": "Longitude",
            "type": "`$NUMBER`",
            "short": "Longitude of the location",
            "format": "float",
          },
          {
            "name": "timezone",
            "title": "Timezone",
            "type": "`$STRING`",
            "short": "Timezone identifier",
          },
          {
            "name": "timezone_abbreviation",
            "title": "Timezone Abbreviation",
            "type": "`$STRING`",
            "short": "Timezone abbreviation",
          },
          {
            "name": "utc_offset_seconds",
            "title": "Utc Offset Seconds",
            "type": "`$INTEGER`",
            "short": "UTC offset in seconds",
          },
        ],
        "name": "forecast",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/forecast",
                "segments": [
                  {
                    "lit": "forecast",
                  },
                ],
                "parts": [
                  "forecast",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "current",
                      "orig": "current",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure",
                    },
                    {
                      "name": "daily",
                      "orig": "daily",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_sum,precipitation_probability_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration",
                    },
                    {
                      "name": "hourly",
                      "orig": "hourly",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,vapour_pressure_deficit,et0_fao_evapotranspiration,visibility,evapotranspiration,cloud_cover_high,cloud_cover_mid,cloud_cover_low,cloud_cover,surface_pressure,pressure_msl,weather_code,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,wind_gusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm",
                    },
                    {
                      "name": "latitude",
                      "orig": "latitude",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "reqd": True,
                      "example": 52.52,
                    },
                    {
                      "name": "longitude",
                      "orig": "longitude",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "reqd": True,
                      "example": 13.41,
                    },
                    {
                      "name": "timezone",
                      "orig": "timezone",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "auto",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "current",
                    "daily",
                    "hourly",
                    "latitude",
                    "longitude",
                    "timezone",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
