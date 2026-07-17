-- WeatherDataApi3 SDK exists test

local sdk = require("weather-data-api3_sdk")

describe("WeatherDataApi3SDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
