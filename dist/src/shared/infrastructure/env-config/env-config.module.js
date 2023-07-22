"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfigModule = void 0;
const common_1 = require("@nestjs/common");
const env_config_service_1 = require("./env-config.service");
const config_1 = require("@nestjs/config");
const node_path_1 = require("node:path");
let EnvConfigModule = exports.EnvConfigModule = class EnvConfigModule extends config_1.ConfigModule {
    static forRoot(options = {}) {
        return super.forRoot({
            ...options,
            envFilePath: [
                (0, node_path_1.join)(__dirname, `../../../../.env.${process.env.NODE_ENV}`)
            ]
        });
    }
};
exports.EnvConfigModule = EnvConfigModule = __decorate([
    (0, common_1.Module)({
        providers: [env_config_service_1.EnvConfigService],
    })
], EnvConfigModule);
//# sourceMappingURL=env-config.module.js.map