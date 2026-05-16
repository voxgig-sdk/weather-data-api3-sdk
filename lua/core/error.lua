-- WeatherDataApi3 SDK error

local WeatherDataApi3Error = {}
WeatherDataApi3Error.__index = WeatherDataApi3Error


function WeatherDataApi3Error.new(code, msg, ctx)
  local self = setmetatable({}, WeatherDataApi3Error)
  self.is_sdk_error = true
  self.sdk = "WeatherDataApi3"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function WeatherDataApi3Error:error()
  return self.msg
end


function WeatherDataApi3Error:__tostring()
  return self.msg
end


return WeatherDataApi3Error
