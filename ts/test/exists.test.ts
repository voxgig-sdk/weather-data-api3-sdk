
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WeatherDataApi3SDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = WeatherDataApi3SDK.test()
    equal(testsdk instanceof WeatherDataApi3SDK, true,
      'WeatherDataApi3SDK.test() must return a client synchronously')
  })

})
