package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "WeatherDataApi3",
			"slug": "weather-data-api3",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.open-meteo.com/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"forecast": map[string]any{},
			},
		},
		"entity": map[string]any{
			"forecast": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "current",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "current_units",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "daily",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "daily_units",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "elevation",
						"short": "Elevation of the location in meters",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "generationtime_ms",
						"short": "Time taken to generate the response in milliseconds",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "hourly",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "hourly_units",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "latitude",
						"short": "Latitude of the location",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "longitude",
						"short": "Longitude of the location",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "timezone",
						"short": "Timezone identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timezone_abbreviation",
						"short": "Timezone abbreviation",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "utc_offset_seconds",
						"short": "UTC offset in seconds",
						"type": "`$INTEGER`",
					},
				},
				"name": "forecast",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure",
											"kind": "query",
											"name": "current",
											"orig": "current",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_sum,precipitation_probability_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration",
											"kind": "query",
											"name": "daily",
											"orig": "daily",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,vapour_pressure_deficit,et0_fao_evapotranspiration,visibility,evapotranspiration,cloud_cover_high,cloud_cover_mid,cloud_cover_low,cloud_cover,surface_pressure,pressure_msl,weather_code,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,wind_gusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm",
											"kind": "query",
											"name": "hourly",
											"orig": "hourly",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 52.52,
											"kind": "query",
											"name": "latitude",
											"orig": "latitude",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": 13.41,
											"kind": "query",
											"name": "longitude",
											"orig": "longitude",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": "auto",
											"kind": "query",
											"name": "timezone",
											"orig": "timezone",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/forecast",
								"parts": []any{
									"forecast",
								},
								"select": map[string]any{
									"exist": []any{
										"current",
										"daily",
										"hourly",
										"latitude",
										"longitude",
										"timezone",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
