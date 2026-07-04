// Typed models for the WeatherDataApi3 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Forecast {
  current?: Record<string, any>
  current_unit?: Record<string, any>
  daily?: Record<string, any>
  daily_unit?: Record<string, any>
  elevation?: number
  generationtime_m?: number
  hourly?: Record<string, any>
  hourly_unit?: Record<string, any>
  latitude?: number
  longitude?: number
  timezone?: string
  timezone_abbreviation?: string
  utc_offset_second?: number
}

export type ForecastLoadMatch = Partial<Forecast>

