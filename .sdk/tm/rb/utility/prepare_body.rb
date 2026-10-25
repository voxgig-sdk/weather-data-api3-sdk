# WeatherDataApi3 SDK utility: prepare_body
require_relative 'media'
module WeatherDataApi3Utilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return WeatherDataApi3Utilities.raw_body(ctx.reqdata) if WeatherDataApi3Utilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
