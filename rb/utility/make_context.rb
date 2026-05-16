# WeatherDataApi3 SDK utility: make_context
require_relative '../core/context'
module WeatherDataApi3Utilities
  MakeContext = ->(ctxmap, basectx) {
    WeatherDataApi3Context.new(ctxmap, basectx)
  }
end
