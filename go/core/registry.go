package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewForecastEntityFunc func(client *WeatherDataApi3SDK, entopts map[string]any) WeatherDataApi3Entity

