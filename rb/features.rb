# WeatherDataApi3 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module WeatherDataApi3Features
  def self.make_feature(name)
    case name
    when "base"
      WeatherDataApi3BaseFeature.new
    when "test"
      WeatherDataApi3TestFeature.new
    else
      WeatherDataApi3BaseFeature.new
    end
  end
end
