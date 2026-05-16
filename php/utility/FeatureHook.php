<?php
declare(strict_types=1);

// WeatherDataApi3 SDK utility: feature_hook

class WeatherDataApi3FeatureHook
{
    public static function call(WeatherDataApi3Context $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
