import { EnvConfig } from './env-config.interface';
import { ConfigService } from '@nestjs/config';
export declare class EnvConfigService implements EnvConfig {
    private configService;
    constructor(configService: ConfigService);
    getAppPort(): number;
    getNodeEnv(): string;
}
