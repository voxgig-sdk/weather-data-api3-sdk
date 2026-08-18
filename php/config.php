<?php
declare(strict_types=1);

// WeatherDataApi3 SDK configuration

class WeatherDataApi3Config
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "WeatherDataApi3",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.open-meteo.com/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "forecast" => [],
                ],
            ],
            "entity" => [
        'forecast' => [
          'fields' => [
            [
              'name' => 'current',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'current_units',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'daily',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'daily_units',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'elevation',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'generationtime_ms',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'hourly',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'hourly_units',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'latitude',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'longitude',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'timezone',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'timezone_abbreviation',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'utc_offset_seconds',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'forecast',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure',
                        'kind' => 'query',
                        'name' => 'current',
                        'orig' => 'current',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_sum,precipitation_probability_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration',
                        'kind' => 'query',
                        'name' => 'daily',
                        'orig' => 'daily',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,vapour_pressure_deficit,et0_fao_evapotranspiration,visibility,evapotranspiration,cloud_cover_high,cloud_cover_mid,cloud_cover_low,cloud_cover,surface_pressure,pressure_msl,weather_code,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,wind_gusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm',
                        'kind' => 'query',
                        'name' => 'hourly',
                        'orig' => 'hourly',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 52.52,
                        'kind' => 'query',
                        'name' => 'latitude',
                        'orig' => 'latitude',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'example' => 13.41,
                        'kind' => 'query',
                        'name' => 'longitude',
                        'orig' => 'longitude',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'example' => 'auto',
                        'kind' => 'query',
                        'name' => 'timezone',
                        'orig' => 'timezone',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/forecast',
                  'parts' => [
                    'forecast',
                  ],
                  'select' => [
                    'exist' => [
                      'current',
                      'daily',
                      'hourly',
                      'latitude',
                      'longitude',
                      'timezone',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return WeatherDataApi3Features::make_feature($name);
    }
}
