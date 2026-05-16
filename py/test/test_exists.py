# ProjectName SDK exists test

import pytest
from weatherdataapi3_sdk import WeatherDataApi3SDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = WeatherDataApi3SDK.test(None, None)
        assert testsdk is not None
