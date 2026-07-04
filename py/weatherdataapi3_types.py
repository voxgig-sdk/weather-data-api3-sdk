# Typed models for the WeatherDataApi3 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Forecast:
    current: Optional[dict] = None
    current_unit: Optional[dict] = None
    daily: Optional[dict] = None
    daily_unit: Optional[dict] = None
    elevation: Optional[float] = None
    generationtime_m: Optional[float] = None
    hourly: Optional[dict] = None
    hourly_unit: Optional[dict] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    timezone: Optional[str] = None
    timezone_abbreviation: Optional[str] = None
    utc_offset_second: Optional[int] = None


@dataclass
class ForecastLoadMatch:
    current: Optional[dict] = None
    current_unit: Optional[dict] = None
    daily: Optional[dict] = None
    daily_unit: Optional[dict] = None
    elevation: Optional[float] = None
    generationtime_m: Optional[float] = None
    hourly: Optional[dict] = None
    hourly_unit: Optional[dict] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    timezone: Optional[str] = None
    timezone_abbreviation: Optional[str] = None
    utc_offset_second: Optional[int] = None

