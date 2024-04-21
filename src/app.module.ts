import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { IntegrationsModule } from './integrations/integrations.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [IntegrationsModule, EventEmitterModule.forRoot({ wildcard: true })],
  controllers: [AppController],
})
export class AppModule {}
