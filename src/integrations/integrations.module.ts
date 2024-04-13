import { Module } from '@nestjs/common';
import { TwilioModule } from './twilio/twilio.module';
import { SignalModule } from './signal/signal.module';

@Module({
  imports: [TwilioModule, SignalModule]
})
export class IntegrationsModule {}
