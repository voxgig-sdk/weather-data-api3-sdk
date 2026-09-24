

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { WeatherDataApi3SDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ForecastEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WEATHER_DATA_API3_TEST_LIVE=TRUE.
  afterEach(liveDelay('WEATHER_DATA_API3_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WeatherDataApi3SDK.test()
    const ent = testsdk.Forecast()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WEATHER_DATA_API3_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'forecast.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"current":{"a":true,"h":"Current","n":"current","r":false,"t":"`$OBJECT`","key$":"current","index$":0},"current_units":{"a":true,"h":"Current Units","n":"current_units","r":false,"t":"`$OBJECT`","key$":"current_units","index$":1},"daily":{"a":true,"h":"Daily","n":"daily","r":false,"t":"`$OBJECT`","key$":"daily","index$":2},"daily_units":{"a":true,"h":"Daily Units","n":"daily_units","r":false,"t":"`$OBJECT`","key$":"daily_units","index$":3},"elevation":{"a":true,"fo":"float","h":"Elevation","n":"elevation","r":false,"sh":"Elevation of the location in meters","t":"`$NUMBER`","key$":"elevation","index$":4},"generationtime_ms":{"a":true,"fo":"float","h":"Generationtime Ms","n":"generationtime_ms","r":false,"sh":"Time taken to generate the response in milliseconds","t":"`$NUMBER`","key$":"generationtime_ms","index$":5},"hourly":{"a":true,"h":"Hourly","n":"hourly","r":false,"t":"`$OBJECT`","key$":"hourly","index$":6},"hourly_units":{"a":true,"h":"Hourly Units","n":"hourly_units","r":false,"t":"`$OBJECT`","key$":"hourly_units","index$":7},"latitude":{"a":true,"fo":"float","h":"Latitude","n":"latitude","r":false,"sh":"Latitude of the location","t":"`$NUMBER`","key$":"latitude","index$":8},"longitude":{"a":true,"fo":"float","h":"Longitude","n":"longitude","r":false,"sh":"Longitude of the location","t":"`$NUMBER`","key$":"longitude","index$":9},"timezone":{"a":true,"h":"Timezone","n":"timezone","r":false,"sh":"Timezone identifier","t":"`$STRING`","key$":"timezone","index$":10},"timezone_abbreviation":{"a":true,"h":"Timezone Abbreviation","n":"timezone_abbreviation","r":false,"sh":"Timezone abbreviation","t":"`$STRING`","key$":"timezone_abbreviation","index$":11},"utc_offset_seconds":{"a":true,"h":"Utc Offset Seconds","n":"utc_offset_seconds","r":false,"sh":"UTC offset in seconds","t":"`$INTEGER`","key$":"utc_offset_seconds","index$":12}},"name":"forecast","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /forecast","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure","k":"query","n":"current","or":"current","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_sum,precipitation_probability_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration","k":"query","n":"daily","or":"daily","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,vapour_pressure_deficit,et0_fao_evapotranspiration,visibility,evapotranspiration,cloud_cover_high,cloud_cover_mid,cloud_cover_low,cloud_cover,surface_pressure,pressure_msl,weather_code,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,wind_gusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm","k":"query","n":"hourly","or":"hourly","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":52.52,"k":"query","n":"latitude","or":"latitude","r":true,"t":"`$NUMBER`","index$":3},{"a":true,"ex":13.41,"k":"query","n":"longitude","or":"longitude","r":true,"t":"`$NUMBER`","index$":4},{"a":true,"ex":"auto","k":"query","n":"timezone","or":"timezone","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/forecast","q":{"exist":["current","daily","hourly","latitude","longitude","timezone"]},"r":{},"s":[{"lit":"forecast"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"forecast","name__orig":"forecast","Name":"Forecast","name_":"forecast","name-":"forecast","NAME":"FORECAST","index$":0}, {"active":true,"entity":"forecast","key$":"BasicForecastFlow","kind":"basic","name":"BasicForecastFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"forecast_ref01","srcdatavar":"forecast_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-forecast_ref01"}}],"index$":0}]}, 'Forecast', {"GET /forecast":{"protocol":"http","operationId":"getWeatherForecast","responses":{"200":{"description":"Successful response with weather forecast data","content":{"application/json":{"schema":{"type":"object","properties":{"latitude":{"description":"Latitude of the location","format":"float","key$":"latitude","type":"number"},"longitude":{"description":"Longitude of the location","format":"float","key$":"longitude","type":"number"},"generationtime_ms":{"description":"Time taken to generate the response in milliseconds","format":"float","key$":"generationtime_ms","type":"number"},"utc_offset_seconds":{"description":"UTC offset in seconds","key$":"utc_offset_seconds","type":"integer"},"timezone":{"description":"Timezone identifier","key$":"timezone","type":"string"},"timezone_abbreviation":{"description":"Timezone abbreviation","key$":"timezone_abbreviation","type":"string"},"elevation":{"description":"Elevation of the location in meters","format":"float","key$":"elevation","type":"number"},"current_units":{"key$":"current_units","properties":{"apparent_temperature":{"example":"°C","type":"string"},"cloud_cover":{"example":"%","type":"string"},"interval":{"example":"seconds","type":"string"},"is_day":{"type":"string"},"precipitation":{"example":"mm","type":"string"},"pressure_msl":{"example":"hPa","type":"string"},"rain":{"example":"mm","type":"string"},"relative_humidity_2m":{"example":"%","type":"string"},"showers":{"example":"mm","type":"string"},"snowfall":{"example":"cm","type":"string"},"surface_pressure":{"example":"hPa","type":"string"},"temperature_2m":{"example":"°C","type":"string"},"time":{"example":"iso8601","type":"string"},"weather_code":{"example":"wmo code","type":"string"},"wind_direction_10m":{"example":"°","type":"string"},"wind_gusts_10m":{"example":"km/h","type":"string"},"wind_speed_10m":{"example":"km/h","type":"string"}},"type":"object","x-ref":"#/components/schemas/CurrentUnits"},"current":{"key$":"current","properties":{"apparent_temperature":{"description":"Apparent temperature (feels like)","format":"float","type":"number"},"cloud_cover":{"description":"Cloud cover percentage","type":"integer"},"interval":{"description":"Update interval in seconds","type":"integer"},"is_day":{"description":"Whether it is currently day (1) or night (0)","type":"integer"},"precipitation":{"description":"Total precipitation","format":"float","type":"number"},"pressure_msl":{"description":"Atmospheric pressure at mean sea level","format":"float","type":"number"},"rain":{"description":"Rain amount","format":"float","type":"number"},"relative_humidity_2m":{"description":"Relative humidity at 2 meters above ground","type":"integer"},"showers":{"description":"Showers amount","format":"float","type":"number"},"snowfall":{"description":"Snowfall amount","format":"float","type":"number"},"surface_pressure":{"description":"Atmospheric pressure at surface level","format":"float","type":"number"},"temperature_2m":{"description":"Temperature at 2 meters above ground","format":"float","type":"number"},"time":{"description":"Timestamp of current weather data","format":"date-time","type":"string"},"weather_code":{"description":"WMO weather code","type":"integer"},"wind_direction_10m":{"description":"Wind direction at 10 meters above ground in degrees","type":"integer"},"wind_gusts_10m":{"description":"Wind gusts at 10 meters above ground","format":"float","type":"number"},"wind_speed_10m":{"description":"Wind speed at 10 meters above ground","format":"float","type":"number"}},"type":"object","x-ref":"#/components/schemas/CurrentWeather"},"hourly_units":{"key$":"hourly_units","properties":{"apparent_temperature":{"example":"°C","type":"string"},"cloud_cover":{"example":"%","type":"string"},"dew_point_2m":{"example":"°C","type":"string"},"precipitation":{"example":"mm","type":"string"},"precipitation_probability":{"example":"%","type":"string"},"rain":{"example":"mm","type":"string"},"relative_humidity_2m":{"example":"%","type":"string"},"showers":{"example":"mm","type":"string"},"snow_depth":{"example":"m","type":"string"},"snowfall":{"example":"cm","type":"string"},"temperature_2m":{"example":"°C","type":"string"},"time":{"example":"iso8601","type":"string"},"visibility":{"example":"m","type":"string"},"weather_code":{"example":"wmo code","type":"string"},"wind_direction_10m":{"example":"°","type":"string"},"wind_gusts_10m":{"example":"km/h","type":"string"},"wind_speed_10m":{"example":"km/h","type":"string"}},"type":"object","x-ref":"#/components/schemas/HourlyUnits"},"hourly":{"key$":"hourly","properties":{"apparent_temperature":{"description":"Hourly apparent temperature","items":{"format":"float","type":"number"},"type":"array"},"cloud_cover":{"description":"Hourly cloud cover percentage","items":{"type":"integer"},"type":"array"},"dew_point_2m":{"description":"Hourly dew point at 2 meters above ground","items":{"format":"float","type":"number"},"type":"array"},"precipitation":{"description":"Hourly precipitation amount","items":{"format":"float","type":"number"},"type":"array"},"precipitation_probability":{"description":"Hourly precipitation probability","items":{"type":"integer"},"type":"array"},"rain":{"description":"Hourly rain amount","items":{"format":"float","type":"number"},"type":"array"},"relative_humidity_2m":{"description":"Hourly relative humidity at 2 meters above ground","items":{"type":"integer"},"type":"array"},"showers":{"description":"Hourly showers amount","items":{"format":"float","type":"number"},"type":"array"},"snow_depth":{"description":"Hourly snow depth","items":{"format":"float","type":"number"},"type":"array"},"snowfall":{"description":"Hourly snowfall amount","items":{"format":"float","type":"number"},"type":"array"},"temperature_2m":{"description":"Hourly temperature at 2 meters above ground","items":{"format":"float","type":"number"},"type":"array"},"time":{"description":"Array of timestamps for hourly data","items":{"format":"date-time","type":"string"},"type":"array"},"visibility":{"description":"Hourly visibility in meters","items":{"format":"float","type":"number"},"type":"array"},"weather_code":{"description":"Hourly WMO weather code","items":{"type":"integer"},"type":"array"},"wind_direction_10m":{"description":"Hourly wind direction at 10 meters above ground","items":{"type":"integer"},"type":"array"},"wind_gusts_10m":{"description":"Hourly wind gusts at 10 meters above ground","items":{"format":"float","type":"number"},"type":"array"},"wind_speed_10m":{"description":"Hourly wind speed at 10 meters above ground","items":{"format":"float","type":"number"},"type":"array"}},"type":"object","x-ref":"#/components/schemas/HourlyWeather"},"daily_units":{"key$":"daily_units","properties":{"apparent_temperature_max":{"example":"°C","type":"string"},"apparent_temperature_min":{"example":"°C","type":"string"},"precipitation_sum":{"example":"mm","type":"string"},"rain_sum":{"example":"mm","type":"string"},"snowfall_sum":{"example":"cm","type":"string"},"sunrise":{"example":"iso8601","type":"string"},"sunset":{"example":"iso8601","type":"string"},"temperature_2m_max":{"example":"°C","type":"string"},"temperature_2m_min":{"example":"°C","type":"string"},"time":{"example":"iso8601","type":"string"},"weather_code":{"example":"wmo code","type":"string"},"wind_gusts_10m_max":{"example":"km/h","type":"string"},"wind_speed_10m_max":{"example":"km/h","type":"string"}},"type":"object","x-ref":"#/components/schemas/DailyUnits"},"daily":{"key$":"daily","properties":{"apparent_temperature_max":{"description":"Daily maximum apparent temperature","items":{"format":"float","type":"number"},"type":"array"},"apparent_temperature_min":{"description":"Daily minimum apparent temperature","items":{"format":"float","type":"number"},"type":"array"},"precipitation_sum":{"description":"Daily total precipitation","items":{"format":"float","type":"number"},"type":"array"},"rain_sum":{"description":"Daily total rain","items":{"format":"float","type":"number"},"type":"array"},"snowfall_sum":{"description":"Daily total snowfall","items":{"format":"float","type":"number"},"type":"array"},"sunrise":{"description":"Sunrise times","items":{"format":"date-time","type":"string"},"type":"array"},"sunset":{"description":"Sunset times","items":{"format":"date-time","type":"string"},"type":"array"},"temperature_2m_max":{"description":"Daily maximum temperature at 2 meters above ground","items":{"format":"float","type":"number"},"type":"array"},"temperature_2m_min":{"description":"Daily minimum temperature at 2 meters above ground","items":{"format":"float","type":"number"},"type":"array"},"time":{"description":"Array of dates for daily data","items":{"format":"date","type":"string"},"type":"array"},"weather_code":{"description":"Daily WMO weather code","items":{"type":"integer"},"type":"array"},"wind_gusts_10m_max":{"description":"Daily maximum wind gusts at 10 meters above ground","items":{"format":"float","type":"number"},"type":"array"},"wind_speed_10m_max":{"description":"Daily maximum wind speed at 10 meters above ground","items":{"format":"float","type":"number"},"type":"array"}},"type":"object","x-ref":"#/components/schemas/DailyWeather"}},"x-ref":"#/components/schemas/WeatherForecastResponse","index$":0}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"boolean","example":true},"reason":{"type":"string","description":"Description of the error"}},"x-ref":"#/components/schemas/ErrorResponse"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"boolean","example":true},"reason":{"type":"string","description":"Description of the error"}},"x-ref":"#/components/schemas/ErrorResponse"}}}}},"parameters":[{"name":"latitude","in":"query","description":"Latitude coordinate of the location","required":true,"schema":{"type":"number","format":"float","example":52.52},"index$":0},{"name":"longitude","in":"query","description":"Longitude coordinate of the location","required":true,"schema":{"type":"number","format":"float","example":13.41},"index$":1},{"name":"current","in":"query","description":"Comma-separated list of current weather parameters to retrieve","required":false,"schema":{"type":"string","example":"temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure"},"index$":2},{"name":"hourly","in":"query","description":"Comma-separated list of hourly weather parameters to retrieve","required":false,"schema":{"type":"string","example":"temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,vapour_pressure_deficit,et0_fao_evapotranspiration,visibility,evapotranspiration,cloud_cover_high,cloud_cover_mid,cloud_cover_low,cloud_cover,surface_pressure,pressure_msl,weather_code,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,wind_gusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm"},"index$":3},{"name":"daily","in":"query","description":"Comma-separated list of daily weather parameters to retrieve","required":false,"schema":{"type":"string","example":"weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_sum,precipitation_probability_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration"},"index$":4},{"name":"timezone","in":"query","description":"Timezone for the returned data. Use 'auto' to automatically detect timezone based on coordinates","required":false,"schema":{"type":"string","default":"GMT","example":"auto"},"index$":5}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let forecast_ref01_data = Object.values(setup.data.existing.forecast)[0] as any

    // LOAD
    const forecast_ref01_ent = client.Forecast()
    const forecast_ref01_match_dt0: any = {}
    const forecast_ref01_data_dt0 = (await forecast_ref01_ent.load(forecast_ref01_match_dt0)).data()
    assert(null != forecast_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/forecast/ForecastTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = WeatherDataApi3SDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['forecast01','forecast02','forecast03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WEATHER_DATA_API3_TEST_FORECAST_ENTID': idmap,
    'WEATHER_DATA_API3_TEST_LIVE': 'FALSE',
    'WEATHER_DATA_API3_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WEATHER_DATA_API3_TEST_FORECAST_ENTID']

  const live = 'TRUE' === env.WEATHER_DATA_API3_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WEATHER_DATA_API3_TEST_FORECAST_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new WeatherDataApi3SDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
