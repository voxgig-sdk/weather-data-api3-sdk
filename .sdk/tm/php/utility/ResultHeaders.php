<?php
declare(strict_types=1);

// WeatherDataApi3 SDK utility: result_headers

class WeatherDataApi3ResultHeaders
{
    public static function call(WeatherDataApi3Context $ctx): ?WeatherDataApi3Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
