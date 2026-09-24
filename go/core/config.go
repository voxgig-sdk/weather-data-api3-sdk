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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"title": "Current",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "current_units",
						"title": "Current Units",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "daily",
						"title": "Daily",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "daily_units",
						"title": "Daily Units",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "elevation",
						"title": "Elevation",
						"type": "`$NUMBER`",
						"short": "Elevation of the location in meters",
						"format": "float",
					},
					map[string]any{
						"name": "generationtime_ms",
						"title": "Generationtime Ms",
						"type": "`$NUMBER`",
						"short": "Time taken to generate the response in milliseconds",
						"format": "float",
					},
					map[string]any{
						"name": "hourly",
						"title": "Hourly",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "hourly_units",
						"title": "Hourly Units",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "latitude",
						"title": "Latitude",
						"type": "`$NUMBER`",
						"short": "Latitude of the location",
						"format": "float",
					},
					map[string]any{
						"name": "longitude",
						"title": "Longitude",
						"type": "`$NUMBER`",
						"short": "Longitude of the location",
						"format": "float",
					},
					map[string]any{
						"name": "timezone",
						"title": "Timezone",
						"type": "`$STRING`",
						"short": "Timezone identifier",
					},
					map[string]any{
						"name": "timezone_abbreviation",
						"title": "Timezone Abbreviation",
						"type": "`$STRING`",
						"short": "Timezone abbreviation",
					},
					map[string]any{
						"name": "utc_offset_seconds",
						"title": "Utc Offset Seconds",
						"type": "`$INTEGER`",
						"short": "UTC offset in seconds",
					},
				},
				"name": "forecast",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/forecast",
								"segments": []any{
									map[string]any{
										"lit": "forecast",
									},
								},
								"parts": []any{
									"forecast",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "current",
											"orig": "current",
											"type": "`$STRING`",
											"kind": "query",
											"example": "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure",
										},
										map[string]any{
											"name": "daily",
											"orig": "daily",
											"type": "`$STRING`",
											"kind": "query",
											"example": "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_sum,precipitation_probability_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration",
										},
										map[string]any{
											"name": "hourly",
											"orig": "hourly",
											"type": "`$STRING`",
											"kind": "query",
											"example": "temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,vapour_pressure_deficit,et0_fao_evapotranspiration,visibility,evapotranspiration,cloud_cover_high,cloud_cover_mid,cloud_cover_low,cloud_cover,surface_pressure,pressure_msl,weather_code,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,wind_gusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm",
										},
										map[string]any{
											"name": "latitude",
											"orig": "latitude",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 52.52,
										},
										map[string]any{
											"name": "longitude",
											"orig": "longitude",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 13.41,
										},
										map[string]any{
											"name": "timezone",
											"orig": "timezone",
											"type": "`$STRING`",
											"kind": "query",
											"example": "auto",
										},
									},
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
