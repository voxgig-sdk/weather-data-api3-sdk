<?php
declare(strict_types=1);

// WeatherDataApi3 SDK base feature

class WeatherDataApi3BaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(WeatherDataApi3Context $ctx, array $options): void {}
    public function PostConstruct(WeatherDataApi3Context $ctx): void {}
    public function PostConstructEntity(WeatherDataApi3Context $ctx): void {}
    public function SetData(WeatherDataApi3Context $ctx): void {}
    public function GetData(WeatherDataApi3Context $ctx): void {}
    public function GetMatch(WeatherDataApi3Context $ctx): void {}
    public function SetMatch(WeatherDataApi3Context $ctx): void {}
    public function PrePoint(WeatherDataApi3Context $ctx): void {}
    public function PreSpec(WeatherDataApi3Context $ctx): void {}
    public function PreRequest(WeatherDataApi3Context $ctx): void {}
    public function PreResponse(WeatherDataApi3Context $ctx): void {}
    public function PreResult(WeatherDataApi3Context $ctx): void {}
    public function PreDone(WeatherDataApi3Context $ctx): void {}
    public function PreUnexpected(WeatherDataApi3Context $ctx): void {}
}
