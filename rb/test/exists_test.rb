# WeatherDataApi3 SDK exists test

require "minitest/autorun"
require_relative "../WeatherDataApi3_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = WeatherDataApi3SDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
