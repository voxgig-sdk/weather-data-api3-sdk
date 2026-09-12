import { Context } from './Context';
declare class WeatherDataApi3Error extends Error {
    isWeatherDataApi3Error: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { WeatherDataApi3Error };
