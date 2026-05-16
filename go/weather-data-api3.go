package voxgigweatherdataapi3sdk

import (
	"github.com/voxgig-sdk/weather-data-api3-sdk/core"
	"github.com/voxgig-sdk/weather-data-api3-sdk/entity"
	"github.com/voxgig-sdk/weather-data-api3-sdk/feature"
	_ "github.com/voxgig-sdk/weather-data-api3-sdk/utility"
)

// Type aliases preserve external API.
type WeatherDataApi3SDK = core.WeatherDataApi3SDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type WeatherDataApi3Entity = core.WeatherDataApi3Entity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type WeatherDataApi3Error = core.WeatherDataApi3Error

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewForecastEntityFunc = func(client *core.WeatherDataApi3SDK, entopts map[string]any) core.WeatherDataApi3Entity {
		return entity.NewForecastEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewWeatherDataApi3SDK = core.NewWeatherDataApi3SDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
