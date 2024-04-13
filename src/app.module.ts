import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { IntegrationsModule } from './integrations/integrations.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    IntegrationsModule,
    EventEmitterModule.forRoot({ wildcard: false }),
  ],
  controllers: [AppController],
  providers: [ConfigService],
})
export class AppModule {}
