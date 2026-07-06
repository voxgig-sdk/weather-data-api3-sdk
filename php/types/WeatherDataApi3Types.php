<?php
declare(strict_types=1);

// Typed models for the WeatherDataApi3 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Forecast entity data model. */
class Forecast
{
    public ?array $current = null;
    public ?array $current_unit = null;
    public ?array $daily = null;
    public ?array $daily_unit = null;
    public ?float $elevation = null;
    public ?float $generationtime_m = null;
    public ?array $hourly = null;
    public ?array $hourly_unit = null;
    public ?float $latitude = null;
    public ?float $longitude = null;
    public ?string $timezone = null;
    public ?string $timezone_abbreviation = null;
    public ?int $utc_offset_second = null;
}

/** Request payload for Forecast#load. */
class ForecastLoadMatch
{
    public ?array $current = null;
    public ?array $current_unit = null;
    public ?array $daily = null;
    public ?array $daily_unit = null;
    public ?float $elevation = null;
    public ?float $generationtime_m = null;
    public ?array $hourly = null;
    public ?array $hourly_unit = null;
    public ?float $latitude = null;
    public ?float $longitude = null;
    public ?string $timezone = null;
    public ?string $timezone_abbreviation = null;
    public ?int $utc_offset_second = null;
}

