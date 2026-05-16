# WeatherDataApi3 SDK utility: feature_add
module WeatherDataApi3Utilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
