<?php
declare(strict_types=1);

// WeatherDataApi3 SDK utility: prepare_body

class WeatherDataApi3PrepareBody
{
    public static function call(WeatherDataApi3Context $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
