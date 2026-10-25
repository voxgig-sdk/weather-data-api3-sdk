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
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.WeatherDataApi3SDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Forecast().load({ "current": 1, "latitude": 1, "longitude": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.WEATHER_DATA_API3_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'forecast.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "current": { "a": true, "h": "Current", "n": "current", "r": false, "t": "`$OBJECT`", "key$": "current", "index$": 0 }, "current_units": { "a": true, "h": "Current Units", "n": "current_units", "r": false, "t": "`$OBJECT`", "key$": "current_units", "index$": 1 }, "daily": { "a": true, "h": "Daily", "n": "daily", "r": false, "t": "`$OBJECT`", "key$": "daily", "index$": 2 }, "daily_units": { "a": true, "h": "Daily Units", "n": "daily_units", "r": false, "t": "`$OBJECT`", "key$": "daily_units", "index$": 3 }, "elevation": { "a": true, "fo": "float", "h": "Elevation", "n": "elevation", "r": false, "sh": "Elevation of the location in meters", "t": "`$NUMBER`", "key$": "elevation", "index$": 4 }, "generationtime_ms": { "a": true, "fo": "float", "h": "Generationtime Ms", "n": "generationtime_ms", "r": false, "sh": "Time taken to generate the response in milliseconds", "t": "`$NUMBER`", "key$": "generationtime_ms", "index$": 5 }, "hourly": { "a": true, "h": "Hourly", "n": "hourly", "r": false, "t": "`$OBJECT`", "key$": "hourly", "index$": 6 }, "hourly_units": { "a": true, "h": "Hourly Units", "n": "hourly_units", "r": false, "t": "`$OBJECT`", "key$": "hourly_units", "index$": 7 }, "latitude": { "a": true, "fo": "float", "h": "Latitude", "n": "latitude", "r": false, "sh": "Latitude of the location", "t": "`$NUMBER`", "key$": "latitude", "index$": 8 }, "longitude": { "a": true, "fo": "float", "h": "Longitude", "n": "longitude", "r": false, "sh": "Longitude of the location", "t": "`$NUMBER`", "key$": "longitude", "index$": 9 }, "timezone": { "a": true, "h": "Timezone", "n": "timezone", "r": false, "sh": "Timezone identifier", "t": "`$STRING`", "key$": "timezone", "index$": 10 }, "timezone_abbreviation": { "a": true, "h": "Timezone Abbreviation", "n": "timezone_abbreviation", "r": false, "sh": "Timezone abbreviation", "t": "`$STRING`", "key$": "timezone_abbreviation", "index$": 11 }, "utc_offset_seconds": { "a": true, "h": "Utc Offset Seconds", "n": "utc_offset_seconds", "r": false, "sh": "UTC offset in seconds", "t": "`$INTEGER`", "key$": "utc_offset_seconds", "index$": 12 } }, "name": "forecast", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /forecast", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure", "k": "query", "n": "current", "or": "current", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_sum,precipitation_probability_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration", "k": "query", "n": "daily", "or": "daily", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,vapour_pressure_deficit,et0_fao_evapotranspiration,visibility,evapotranspiration,cloud_cover_high,cloud_cover_mid,cloud_cover_low,cloud_cover,surface_pressure,pressure_msl,weather_code,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,wind_gusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm", "k": "query", "n": "hourly", "or": "hourly", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": 52.52, "k": "query", "n": "latitude", "or": "latitude", "r": true, "t": "`$NUMBER`", "index$": 3 }, { "a": true, "ex": 13.41, "k": "query", "n": "longitude", "or": "longitude", "r": true, "t": "`$NUMBER`", "index$": 4 }, { "a": true, "ex": "auto", "k": "query", "n": "timezone", "or": "timezone", "r": false, "t": "`$STRING`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/forecast", "q": { "exist": ["latitude", "longitude"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "forecast" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "forecast", "name__orig": "forecast", "Name": "Forecast", "name_": "forecast", "name-": "forecast", "NAME": "FORECAST", "index$": 0 }, { "active": true, "entity": "forecast", "key$": "BasicForecastFlow", "kind": "basic", "name": "BasicForecastFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "forecast_ref01", "srcdatavar": "forecast_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-forecast_ref01" } }], "index$": 0 }] }, 'Forecast', { "GET /forecast": { "protocol": "http", "parameters": [{ "name": "latitude", "in": "query", "description": "Latitude coordinate of the location", "required": true, "schema": { "type": "number", "format": "float", "example": 52.52 }, "index$": 0 }, { "name": "longitude", "in": "query", "description": "Longitude coordinate of the location", "required": true, "schema": { "type": "number", "format": "float", "example": 13.41 }, "index$": 1 }, { "name": "current", "in": "query", "description": "Comma-separated list of current weather parameters to retrieve", "required": false, "schema": { "type": "string", "example": "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure" }, "index$": 2 }, { "name": "hourly", "in": "query", "description": "Comma-separated list of hourly weather parameters to retrieve", "required": false, "schema": { "type": "string", "example": "temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,vapour_pressure_deficit,et0_fao_evapotranspiration,visibility,evapotranspiration,cloud_cover_high,cloud_cover_mid,cloud_cover_low,cloud_cover,surface_pressure,pressure_msl,weather_code,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,wind_gusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm" }, "index$": 3 }, { "name": "daily", "in": "query", "description": "Comma-separated list of daily weather parameters to retrieve", "required": false, "schema": { "type": "string", "example": "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_sum,precipitation_probability_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration" }, "index$": 4 }, { "name": "timezone", "in": "query", "description": "Timezone for the returned data. Use 'auto' to automatically detect timezone based on coordinates", "required": false, "schema": { "type": "string", "default": "GMT", "example": "auto" }, "index$": 5 }] } }, { strict: LIVE_STRICT, t });
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
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
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