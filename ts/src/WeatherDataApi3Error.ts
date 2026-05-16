
import { Context } from './Context'


class WeatherDataApi3Error extends Error {

  isWeatherDataApi3Error = true

  sdk = 'WeatherDataApi3'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  WeatherDataApi3Error
}

