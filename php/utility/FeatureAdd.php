<?php
declare(strict_types=1);

// WeatherDataApi3 SDK utility: feature_add

class WeatherDataApi3FeatureAdd
{
    public static function call(WeatherDataApi3Context $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
