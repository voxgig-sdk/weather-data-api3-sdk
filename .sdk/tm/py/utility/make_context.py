# WeatherDataApi3 SDK utility: make_context

from core.context import WeatherDataApi3Context


def make_context_util(ctxmap, basectx):
    return WeatherDataApi3Context(ctxmap, basectx)
