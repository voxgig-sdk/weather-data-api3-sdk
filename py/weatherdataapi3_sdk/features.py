# WeatherDataApi3 SDK feature factory

from weatherdataapi3_sdk.feature.base_feature import WeatherDataApi3BaseFeature
from weatherdataapi3_sdk.feature.test_feature import WeatherDataApi3TestFeature


def _make_feature(name):
    features = {
        "base": lambda: WeatherDataApi3BaseFeature(),
        "test": lambda: WeatherDataApi3TestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
