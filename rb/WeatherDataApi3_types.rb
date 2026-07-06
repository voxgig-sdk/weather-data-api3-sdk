# frozen_string_literal: true

# Typed models for the WeatherDataApi3 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Forecast entity data model.
#
# @!attribute [rw] current
#   @return [Hash, nil]
#
# @!attribute [rw] current_unit
#   @return [Hash, nil]
#
# @!attribute [rw] daily
#   @return [Hash, nil]
#
# @!attribute [rw] daily_unit
#   @return [Hash, nil]
#
# @!attribute [rw] elevation
#   @return [Float, nil]
#
# @!attribute [rw] generationtime_m
#   @return [Float, nil]
#
# @!attribute [rw] hourly
#   @return [Hash, nil]
#
# @!attribute [rw] hourly_unit
#   @return [Hash, nil]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] timezone
#   @return [String, nil]
#
# @!attribute [rw] timezone_abbreviation
#   @return [String, nil]
#
# @!attribute [rw] utc_offset_second
#   @return [Integer, nil]
Forecast = Struct.new(
  :current,
  :current_unit,
  :daily,
  :daily_unit,
  :elevation,
  :generationtime_m,
  :hourly,
  :hourly_unit,
  :latitude,
  :longitude,
  :timezone,
  :timezone_abbreviation,
  :utc_offset_second,
  keyword_init: true
)

# Request payload for Forecast#load.
#
# @!attribute [rw] current
#   @return [Hash, nil]
#
# @!attribute [rw] current_unit
#   @return [Hash, nil]
#
# @!attribute [rw] daily
#   @return [Hash, nil]
#
# @!attribute [rw] daily_unit
#   @return [Hash, nil]
#
# @!attribute [rw] elevation
#   @return [Float, nil]
#
# @!attribute [rw] generationtime_m
#   @return [Float, nil]
#
# @!attribute [rw] hourly
#   @return [Hash, nil]
#
# @!attribute [rw] hourly_unit
#   @return [Hash, nil]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] timezone
#   @return [String, nil]
#
# @!attribute [rw] timezone_abbreviation
#   @return [String, nil]
#
# @!attribute [rw] utc_offset_second
#   @return [Integer, nil]
ForecastLoadMatch = Struct.new(
  :current,
  :current_unit,
  :daily,
  :daily_unit,
  :elevation,
  :generationtime_m,
  :hourly,
  :hourly_unit,
  :latitude,
  :longitude,
  :timezone,
  :timezone_abbreviation,
  :utc_offset_second,
  keyword_init: true
)

