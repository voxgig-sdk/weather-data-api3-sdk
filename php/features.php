<?php
declare(strict_types=1);

// WeatherDataApi3 SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class WeatherDataApi3Features
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new WeatherDataApi3BaseFeature();
            case "test":
                return new WeatherDataApi3TestFeature();
            default:
                return new WeatherDataApi3BaseFeature();
        }
    }
}
