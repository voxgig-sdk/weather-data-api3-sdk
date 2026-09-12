import { ForecastEntity } from './entity/ForecastEntity';
export type * from './WeatherDataApi3Types';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { WeatherDataApi3EntityBase } from './WeatherDataApi3EntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class WeatherDataApi3SDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Forecast(entopts?: Record<string, any>): ForecastEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): WeatherDataApi3SDK;
    tester(testopts?: any, sdkopts?: any): WeatherDataApi3SDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof WeatherDataApi3SDK;
export { stdutil, config, BaseFeature, WeatherDataApi3EntityBase, WeatherDataApi3SDK, SDK, };
