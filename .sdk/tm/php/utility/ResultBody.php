<?php
declare(strict_types=1);

// WeatherDataApi3 SDK utility: result_body

class WeatherDataApi3ResultBody
{
    public static function call(WeatherDataApi3Context $ctx): ?WeatherDataApi3Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
