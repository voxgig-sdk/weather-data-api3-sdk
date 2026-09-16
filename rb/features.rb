# WeatherDataApi3 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module WeatherDataApi3Features
  def self.make_feature(name)
    case name
    when "base"
      WeatherDataApi3BaseFeature.new
    when "ratelimit"
      WeatherDataApi3RatelimitFeature.new
    when "retry"
      WeatherDataApi3RetryFeature.new
    when "test"
      WeatherDataApi3TestFeature.new
    when "timeout"
      WeatherDataApi3TimeoutFeature.new
    else
      WeatherDataApi3BaseFeature.new
    end
  end
end
