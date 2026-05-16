<?php
declare(strict_types=1);

// WeatherDataApi3 SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class WeatherDataApi3MakeContext
{
    public static function call(array $ctxmap, ?WeatherDataApi3Context $basectx): WeatherDataApi3Context
    {
        return new WeatherDataApi3Context($ctxmap, $basectx);
    }
}
