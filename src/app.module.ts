import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { IntegrationsModule } from './integrations/integrations.module';

@Module({
  imports: [IntegrationsModule],
  controllers: [AppController],
})
export class AppModule {}
