package core

import "encoding/json"

type WeatherDataApi3Error struct {
	IsWeatherDataApi3Error bool
	Sdk                string
	Code               string
	Msg                string
	// Reachable for a debugger, invisible to a serialiser: the context holds
	// the live spec and options, and an error is what gets logged.
	Ctx    *Context `json:"-"`
	Result any
	Spec   any
}

func NewWeatherDataApi3Error(code string, msg string, ctx *Context) *WeatherDataApi3Error {
	return &WeatherDataApi3Error{
		IsWeatherDataApi3Error: true,
		Sdk:                "WeatherDataApi3",
		Code:               code,
		Msg:                msg,
		Ctx:                ctx,
	}
}

func (e *WeatherDataApi3Error) Error() string {
	return e.Msg
}

// What makeError attached is already cleaned; the context is not part of
// the record.
func (e *WeatherDataApi3Error) Record() map[string]any {
	return map[string]any{
		"sdk":     e.Sdk,
		"code":    e.Code,
		"message": e.Msg,
		"result":  e.Result,
		"spec":    e.Spec,
	}
}

func (e *WeatherDataApi3Error) MarshalJSON() ([]byte, error) {
	return json.Marshal(e.Record())
}
