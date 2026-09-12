export interface Forecast {
    current?: Record<string, any>;
    current_units?: Record<string, any>;
    daily?: Record<string, any>;
    daily_units?: Record<string, any>;
    elevation?: number;
    generationtime_ms?: number;
    hourly?: Record<string, any>;
    hourly_units?: Record<string, any>;
    latitude?: number;
    longitude?: number;
    timezone?: string;
    timezone_abbreviation?: string;
    utc_offset_seconds?: number;
}
export interface ForecastLoadMatch {
    current?: string;
    daily?: string;
    hourly?: string;
    latitude: number;
    longitude: number;
    timezone?: string;
}
