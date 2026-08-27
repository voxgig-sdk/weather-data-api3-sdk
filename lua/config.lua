-- WeatherDataApi3 SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "WeatherDataApi3",
      slug = "weather-data-api3",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://api.open-meteo.com/v1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["forecast"] = {},
      },
    },
    entity = {
      ["forecast"] = {
        ["fields"] = {
          {
            ["name"] = "current",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "current_units",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "daily",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "daily_units",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "elevation",
            ["short"] = "Elevation of the location in meters",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "generationtime_ms",
            ["short"] = "Time taken to generate the response in milliseconds",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "hourly",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "hourly_units",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "latitude",
            ["short"] = "Latitude of the location",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "longitude",
            ["short"] = "Longitude of the location",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "timezone",
            ["short"] = "Timezone identifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "timezone_abbreviation",
            ["short"] = "Timezone abbreviation",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "utc_offset_seconds",
            ["short"] = "UTC offset in seconds",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "forecast",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure",
                      ["kind"] = "query",
                      ["name"] = "current",
                      ["orig"] = "current",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_sum,precipitation_probability_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration",
                      ["kind"] = "query",
                      ["name"] = "daily",
                      ["orig"] = "daily",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,vapour_pressure_deficit,et0_fao_evapotranspiration,visibility,evapotranspiration,cloud_cover_high,cloud_cover_mid,cloud_cover_low,cloud_cover,surface_pressure,pressure_msl,weather_code,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,wind_gusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm",
                      ["kind"] = "query",
                      ["name"] = "hourly",
                      ["orig"] = "hourly",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 52.52,
                      ["kind"] = "query",
                      ["name"] = "latitude",
                      ["orig"] = "latitude",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["example"] = 13.41,
                      ["kind"] = "query",
                      ["name"] = "longitude",
                      ["orig"] = "longitude",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["example"] = "auto",
                      ["kind"] = "query",
                      ["name"] = "timezone",
                      ["orig"] = "timezone",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/forecast",
                ["parts"] = {
                  "forecast",
                },
                ["select"] = {
                  ["exist"] = {
                    "current",
                    "daily",
                    "hourly",
                    "latitude",
                    "longitude",
                    "timezone",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
