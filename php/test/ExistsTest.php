<?php
declare(strict_types=1);

// WeatherDataApi3 SDK exists test

require_once __DIR__ . '/../weatherdataapi3_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = WeatherDataApi3SDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
