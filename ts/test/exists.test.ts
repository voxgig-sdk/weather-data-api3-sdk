
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WeatherDataApi3SDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await WeatherDataApi3SDK.test()
    equal(null !== testsdk, true)
  })

})
