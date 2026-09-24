"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherDataApi3Error = void 0;
class WeatherDataApi3Error extends Error {
    isWeatherDataApi3Error = true;
    sdk = 'WeatherDataApi3';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.WeatherDataApi3Error = WeatherDataApi3Error;
//# sourceMappingURL=WeatherDataApi3Error.js.map