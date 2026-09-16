"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ForecastEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when WEATHER_DATA_API3_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('WEATHER_DATA_API3_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.WeatherDataApi3SDK.test();
        const ent = testsdk.Forecast();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.WEATHER_DATA_API3_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'forecast.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "current", "req": false, "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "current_units", "req": false, "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "daily", "req": false, "type": "`$OBJECT`", "index$": 2 }, { "active": true, "name": "daily_units", "req": false, "type": "`$OBJECT`", "index$": 3 }, { "active": true, "format": "float", "name": "elevation", "req": false, "short": "Elevation of the location in meters", "type": "`$NUMBER`", "index$": 4 }, { "active": true, "format": "float", "name": "generationtime_ms", "req": false, "short": "Time taken to generate the response in milliseconds", "type": "`$NUMBER`", "index$": 5 }, { "active": true, "name": "hourly", "req": false, "type": "`$OBJECT`", "index$": 6 }, { "active": true, "name": "hourly_units", "req": false, "type": "`$OBJECT`", "index$": 7 }, { "active": true, "format": "float", "name": "latitude", "req": false, "short": "Latitude of the location", "type": "`$NUMBER`", "index$": 8 }, { "active": true, "format": "float", "name": "longitude", "req": false, "short": "Longitude of the location", "type": "`$NUMBER`", "index$": 9 }, { "active": true, "name": "timezone", "req": false, "short": "Timezone identifier", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "timezone_abbreviation", "req": false, "short": "Timezone abbreviation", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "utc_offset_seconds", "req": false, "short": "UTC offset in seconds", "type": "`$INTEGER`", "index$": 12 }], "name": "forecast", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure", "kind": "query", "name": "current", "orig": "current", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_sum,precipitation_probability_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration", "kind": "query", "name": "daily", "orig": "daily", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,vapour_pressure_deficit,et0_fao_evapotranspiration,visibility,evapotranspiration,cloud_cover_high,cloud_cover_mid,cloud_cover_low,cloud_cover,surface_pressure,pressure_msl,weather_code,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,wind_gusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm", "kind": "query", "name": "hourly", "orig": "hourly", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": 52.52, "kind": "query", "name": "latitude", "orig": "latitude", "reqd": true, "type": "`$NUMBER`", "index$": 3 }, { "active": true, "example": 13.41, "kind": "query", "name": "longitude", "orig": "longitude", "reqd": true, "type": "`$NUMBER`", "index$": 4 }, { "active": true, "example": "auto", "kind": "query", "name": "timezone", "orig": "timezone", "reqd": false, "type": "`$STRING`", "index$": 5 }] }, "contract": { "id": "GET /forecast", "json": "{\"operationId\":\"getWeatherForecast\",\"parameters\":[{\"description\":\"Latitude coordinate of the location\",\"in\":\"query\",\"name\":\"latitude\",\"required\":true,\"schema\":{\"example\":52.52,\"format\":\"float\",\"type\":\"number\"}},{\"description\":\"Longitude coordinate of the location\",\"in\":\"query\",\"name\":\"longitude\",\"required\":true,\"schema\":{\"example\":13.41,\"format\":\"float\",\"type\":\"number\"}},{\"description\":\"Comma-separated list of current weather parameters to retrieve\",\"in\":\"query\",\"name\":\"current\",\"required\":false,\"schema\":{\"example\":\"temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure\",\"type\":\"string\"}},{\"description\":\"Comma-separated list of hourly weather parameters to retrieve\",\"in\":\"query\",\"name\":\"hourly\",\"required\":false,\"schema\":{\"example\":\"temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,vapour_pressure_deficit,et0_fao_evapotranspiration,visibility,evapotranspiration,cloud_cover_high,cloud_cover_mid,cloud_cover_low,cloud_cover,surface_pressure,pressure_msl,weather_code,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,wind_gusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm\",\"type\":\"string\"}},{\"description\":\"Comma-separated list of daily weather parameters to retrieve\",\"in\":\"query\",\"name\":\"daily\",\"required\":false,\"schema\":{\"example\":\"weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_sum,precipitation_probability_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration\",\"type\":\"string\"}},{\"description\":\"Timezone for the returned data. Use 'auto' to automatically detect timezone based on coordinates\",\"in\":\"query\",\"name\":\"timezone\",\"required\":false,\"schema\":{\"default\":\"GMT\",\"example\":\"auto\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"current\":{\"properties\":{\"apparent_temperature\":{\"description\":\"Apparent temperature (feels like)\",\"format\":\"float\",\"type\":\"number\"},\"cloud_cover\":{\"description\":\"Cloud cover percentage\",\"type\":\"integer\"},\"interval\":{\"description\":\"Update interval in seconds\",\"type\":\"integer\"},\"is_day\":{\"description\":\"Whether it is currently day (1) or night (0)\",\"type\":\"integer\"},\"precipitation\":{\"description\":\"Total precipitation\",\"format\":\"float\",\"type\":\"number\"},\"pressure_msl\":{\"description\":\"Atmospheric pressure at mean sea level\",\"format\":\"float\",\"type\":\"number\"},\"rain\":{\"description\":\"Rain amount\",\"format\":\"float\",\"type\":\"number\"},\"relative_humidity_2m\":{\"description\":\"Relative humidity at 2 meters above ground\",\"type\":\"integer\"},\"showers\":{\"description\":\"Showers amount\",\"format\":\"float\",\"type\":\"number\"},\"snowfall\":{\"description\":\"Snowfall amount\",\"format\":\"float\",\"type\":\"number\"},\"surface_pressure\":{\"description\":\"Atmospheric pressure at surface level\",\"format\":\"float\",\"type\":\"number\"},\"temperature_2m\":{\"description\":\"Temperature at 2 meters above ground\",\"format\":\"float\",\"type\":\"number\"},\"time\":{\"description\":\"Timestamp of current weather data\",\"format\":\"date-time\",\"type\":\"string\"},\"weather_code\":{\"description\":\"WMO weather code\",\"type\":\"integer\"},\"wind_direction_10m\":{\"description\":\"Wind direction at 10 meters above ground in degrees\",\"type\":\"integer\"},\"wind_gusts_10m\":{\"description\":\"Wind gusts at 10 meters above ground\",\"format\":\"float\",\"type\":\"number\"},\"wind_speed_10m\":{\"description\":\"Wind speed at 10 meters above ground\",\"format\":\"float\",\"type\":\"number\"}},\"type\":\"object\"},\"current_units\":{\"properties\":{\"apparent_temperature\":{\"example\":\"°C\",\"type\":\"string\"},\"cloud_cover\":{\"example\":\"%\",\"type\":\"string\"},\"interval\":{\"example\":\"seconds\",\"type\":\"string\"},\"is_day\":{\"type\":\"string\"},\"precipitation\":{\"example\":\"mm\",\"type\":\"string\"},\"pressure_msl\":{\"example\":\"hPa\",\"type\":\"string\"},\"rain\":{\"example\":\"mm\",\"type\":\"string\"},\"relative_humidity_2m\":{\"example\":\"%\",\"type\":\"string\"},\"showers\":{\"example\":\"mm\",\"type\":\"string\"},\"snowfall\":{\"example\":\"cm\",\"type\":\"string\"},\"surface_pressure\":{\"example\":\"hPa\",\"type\":\"string\"},\"temperature_2m\":{\"example\":\"°C\",\"type\":\"string\"},\"time\":{\"example\":\"iso8601\",\"type\":\"string\"},\"weather_code\":{\"example\":\"wmo code\",\"type\":\"string\"},\"wind_direction_10m\":{\"example\":\"°\",\"type\":\"string\"},\"wind_gusts_10m\":{\"example\":\"km/h\",\"type\":\"string\"},\"wind_speed_10m\":{\"example\":\"km/h\",\"type\":\"string\"}},\"type\":\"object\"},\"daily\":{\"properties\":{\"apparent_temperature_max\":{\"description\":\"Daily maximum apparent temperature\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"apparent_temperature_min\":{\"description\":\"Daily minimum apparent temperature\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"precipitation_sum\":{\"description\":\"Daily total precipitation\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"rain_sum\":{\"description\":\"Daily total rain\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"snowfall_sum\":{\"description\":\"Daily total snowfall\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"sunrise\":{\"description\":\"Sunrise times\",\"items\":{\"format\":\"date-time\",\"type\":\"string\"},\"type\":\"array\"},\"sunset\":{\"description\":\"Sunset times\",\"items\":{\"format\":\"date-time\",\"type\":\"string\"},\"type\":\"array\"},\"temperature_2m_max\":{\"description\":\"Daily maximum temperature at 2 meters above ground\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"temperature_2m_min\":{\"description\":\"Daily minimum temperature at 2 meters above ground\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"time\":{\"description\":\"Array of dates for daily data\",\"items\":{\"format\":\"date\",\"type\":\"string\"},\"type\":\"array\"},\"weather_code\":{\"description\":\"Daily WMO weather code\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"wind_gusts_10m_max\":{\"description\":\"Daily maximum wind gusts at 10 meters above ground\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"wind_speed_10m_max\":{\"description\":\"Daily maximum wind speed at 10 meters above ground\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"}},\"type\":\"object\"},\"daily_units\":{\"properties\":{\"apparent_temperature_max\":{\"example\":\"°C\",\"type\":\"string\"},\"apparent_temperature_min\":{\"example\":\"°C\",\"type\":\"string\"},\"precipitation_sum\":{\"example\":\"mm\",\"type\":\"string\"},\"rain_sum\":{\"example\":\"mm\",\"type\":\"string\"},\"snowfall_sum\":{\"example\":\"cm\",\"type\":\"string\"},\"sunrise\":{\"example\":\"iso8601\",\"type\":\"string\"},\"sunset\":{\"example\":\"iso8601\",\"type\":\"string\"},\"temperature_2m_max\":{\"example\":\"°C\",\"type\":\"string\"},\"temperature_2m_min\":{\"example\":\"°C\",\"type\":\"string\"},\"time\":{\"example\":\"iso8601\",\"type\":\"string\"},\"weather_code\":{\"example\":\"wmo code\",\"type\":\"string\"},\"wind_gusts_10m_max\":{\"example\":\"km/h\",\"type\":\"string\"},\"wind_speed_10m_max\":{\"example\":\"km/h\",\"type\":\"string\"}},\"type\":\"object\"},\"elevation\":{\"description\":\"Elevation of the location in meters\",\"format\":\"float\",\"type\":\"number\"},\"generationtime_ms\":{\"description\":\"Time taken to generate the response in milliseconds\",\"format\":\"float\",\"type\":\"number\"},\"hourly\":{\"properties\":{\"apparent_temperature\":{\"description\":\"Hourly apparent temperature\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"cloud_cover\":{\"description\":\"Hourly cloud cover percentage\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"dew_point_2m\":{\"description\":\"Hourly dew point at 2 meters above ground\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"precipitation\":{\"description\":\"Hourly precipitation amount\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"precipitation_probability\":{\"description\":\"Hourly precipitation probability\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"rain\":{\"description\":\"Hourly rain amount\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"relative_humidity_2m\":{\"description\":\"Hourly relative humidity at 2 meters above ground\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"showers\":{\"description\":\"Hourly showers amount\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"snow_depth\":{\"description\":\"Hourly snow depth\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"snowfall\":{\"description\":\"Hourly snowfall amount\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"temperature_2m\":{\"description\":\"Hourly temperature at 2 meters above ground\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"time\":{\"description\":\"Array of timestamps for hourly data\",\"items\":{\"format\":\"date-time\",\"type\":\"string\"},\"type\":\"array\"},\"visibility\":{\"description\":\"Hourly visibility in meters\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"weather_code\":{\"description\":\"Hourly WMO weather code\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"wind_direction_10m\":{\"description\":\"Hourly wind direction at 10 meters above ground\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"wind_gusts_10m\":{\"description\":\"Hourly wind gusts at 10 meters above ground\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"wind_speed_10m\":{\"description\":\"Hourly wind speed at 10 meters above ground\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"}},\"type\":\"object\"},\"hourly_units\":{\"properties\":{\"apparent_temperature\":{\"example\":\"°C\",\"type\":\"string\"},\"cloud_cover\":{\"example\":\"%\",\"type\":\"string\"},\"dew_point_2m\":{\"example\":\"°C\",\"type\":\"string\"},\"precipitation\":{\"example\":\"mm\",\"type\":\"string\"},\"precipitation_probability\":{\"example\":\"%\",\"type\":\"string\"},\"rain\":{\"example\":\"mm\",\"type\":\"string\"},\"relative_humidity_2m\":{\"example\":\"%\",\"type\":\"string\"},\"showers\":{\"example\":\"mm\",\"type\":\"string\"},\"snow_depth\":{\"example\":\"m\",\"type\":\"string\"},\"snowfall\":{\"example\":\"cm\",\"type\":\"string\"},\"temperature_2m\":{\"example\":\"°C\",\"type\":\"string\"},\"time\":{\"example\":\"iso8601\",\"type\":\"string\"},\"visibility\":{\"example\":\"m\",\"type\":\"string\"},\"weather_code\":{\"example\":\"wmo code\",\"type\":\"string\"},\"wind_direction_10m\":{\"example\":\"°\",\"type\":\"string\"},\"wind_gusts_10m\":{\"example\":\"km/h\",\"type\":\"string\"},\"wind_speed_10m\":{\"example\":\"km/h\",\"type\":\"string\"}},\"type\":\"object\"},\"latitude\":{\"description\":\"Latitude of the location\",\"format\":\"float\",\"type\":\"number\"},\"longitude\":{\"description\":\"Longitude of the location\",\"format\":\"float\",\"type\":\"number\"},\"timezone\":{\"description\":\"Timezone identifier\",\"type\":\"string\"},\"timezone_abbreviation\":{\"description\":\"Timezone abbreviation\",\"type\":\"string\"},\"utc_offset_seconds\":{\"description\":\"UTC offset in seconds\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with weather forecast data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":true,\"type\":\"boolean\"},\"reason\":{\"description\":\"Description of the error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":true,\"type\":\"boolean\"},\"reason\":{\"description\":\"Description of the error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/forecast", "segments": [{ "lit": "forecast" }], "select": { "exist": ["current", "daily", "hourly", "latitude", "longitude", "timezone"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "forecast", "name__orig": "forecast", "Name": "Forecast", "name_": "forecast", "name-": "forecast", "NAME": "FORECAST", "index$": 0 }, { "active": true, "entity": "forecast", "key$": "BasicForecastFlow", "kind": "basic", "name": "BasicForecastFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "forecast_ref01", "srcdatavar": "forecast_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-forecast_ref01" } }], "index$": 0 }] }, 'Forecast');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let forecast_ref01_data = Object.values(setup.data.existing.forecast)[0];
        // LOAD
        const forecast_ref01_ent = client.Forecast();
        const forecast_ref01_match_dt0 = {};
        const forecast_ref01_data_dt0 = (await forecast_ref01_ent.load(forecast_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != forecast_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/forecast/ForecastTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.WeatherDataApi3SDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['forecast01', 'forecast02', 'forecast03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'WEATHER_DATA_API3_TEST_FORECAST_ENTID': idmap,
        'WEATHER_DATA_API3_TEST_LIVE': 'FALSE',
        'WEATHER_DATA_API3_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['WEATHER_DATA_API3_TEST_FORECAST_ENTID'];
    const live = 'TRUE' === env.WEATHER_DATA_API3_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['WEATHER_DATA_API3_TEST_FORECAST_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.WeatherDataApi3SDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.WEATHER_DATA_API3_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ForecastEntity.test.js.map