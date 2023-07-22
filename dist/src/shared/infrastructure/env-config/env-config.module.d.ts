import { DynamicModule } from '@nestjs/common';
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config';
export declare class EnvConfigModule extends ConfigModule {
    static forRoot(options?: ConfigModuleOptions): DynamicModule;
}
