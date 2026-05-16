<?php
declare(strict_types=1);

// WeatherDataApi3 SDK utility: prepare_headers

class WeatherDataApi3PrepareHeaders
{
    public static function call(WeatherDataApi3Context $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
