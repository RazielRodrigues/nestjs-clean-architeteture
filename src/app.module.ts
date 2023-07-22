import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EnvConfigModule } from './shared/infraestructure/env-config/env-config.module';

@Module({
  imports: [ConfigModule, EnvConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
