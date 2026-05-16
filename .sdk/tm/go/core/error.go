package core

type WeatherDataApi3Error struct {
	IsWeatherDataApi3Error bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewWeatherDataApi3Error(code string, msg string, ctx *Context) *WeatherDataApi3Error {
	return &WeatherDataApi3Error{
		IsWeatherDataApi3Error: true,
		Sdk:              "WeatherDataApi3",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *WeatherDataApi3Error) Error() string {
	return e.Msg
}
