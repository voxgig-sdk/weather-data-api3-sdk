-- Typed models for the WeatherDataApi3 SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Forecast
---@field current? table
---@field current_unit? table
---@field daily? table
---@field daily_unit? table
---@field elevation? number
---@field generationtime_m? number
---@field hourly? table
---@field hourly_unit? table
---@field latitude? number
---@field longitude? number
---@field timezone? string
---@field timezone_abbreviation? string
---@field utc_offset_second? number

---@class ForecastLoadMatch

local M = {}

return M
