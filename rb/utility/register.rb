# WeatherDataApi3 SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

WeatherDataApi3Utility.registrar = ->(u) {
  u.clean = WeatherDataApi3Utilities::Clean
  u.done = WeatherDataApi3Utilities::Done
  u.make_error = WeatherDataApi3Utilities::MakeError
  u.feature_add = WeatherDataApi3Utilities::FeatureAdd
  u.feature_hook = WeatherDataApi3Utilities::FeatureHook
  u.feature_init = WeatherDataApi3Utilities::FeatureInit
  u.fetcher = WeatherDataApi3Utilities::Fetcher
  u.make_fetch_def = WeatherDataApi3Utilities::MakeFetchDef
  u.make_context = WeatherDataApi3Utilities::MakeContext
  u.make_options = WeatherDataApi3Utilities::MakeOptions
  u.make_request = WeatherDataApi3Utilities::MakeRequest
  u.make_response = WeatherDataApi3Utilities::MakeResponse
  u.make_result = WeatherDataApi3Utilities::MakeResult
  u.make_point = WeatherDataApi3Utilities::MakePoint
  u.make_spec = WeatherDataApi3Utilities::MakeSpec
  u.make_url = WeatherDataApi3Utilities::MakeUrl
  u.param = WeatherDataApi3Utilities::Param
  u.prepare_auth = WeatherDataApi3Utilities::PrepareAuth
  u.prepare_body = WeatherDataApi3Utilities::PrepareBody
  u.prepare_headers = WeatherDataApi3Utilities::PrepareHeaders
  u.prepare_method = WeatherDataApi3Utilities::PrepareMethod
  u.prepare_params = WeatherDataApi3Utilities::PrepareParams
  u.prepare_path = WeatherDataApi3Utilities::PreparePath
  u.prepare_query = WeatherDataApi3Utilities::PrepareQuery
  u.graphql_body = WeatherDataApi3Utilities::GraphqlBody
  u.graphql_errors = WeatherDataApi3Utilities::GraphqlErrors
  u.result_basic = WeatherDataApi3Utilities::ResultBasic
  u.result_body = WeatherDataApi3Utilities::ResultBody
  u.result_headers = WeatherDataApi3Utilities::ResultHeaders
  u.transform_request = WeatherDataApi3Utilities::TransformRequest
  u.transform_response = WeatherDataApi3Utilities::TransformResponse
}
