import { WeatherDataApi3EntityBase } from '../WeatherDataApi3EntityBase';
import type { WeatherDataApi3SDK } from '../WeatherDataApi3SDK';
import type { Control } from '../types';
import type { Forecast, ForecastLoadMatch } from '../WeatherDataApi3Types';
declare class ForecastEntity extends WeatherDataApi3EntityBase<Forecast> {
    constructor(client: WeatherDataApi3SDK, entopts: any);
    make(this: ForecastEntity): ForecastEntity;
    load(this: any, reqmatch?: ForecastLoadMatch, ctrl?: Control): Promise<ForecastEntity>;
}
export { ForecastEntity };
