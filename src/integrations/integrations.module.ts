import { Module } from '@nestjs/common';
import { TwilioModule } from './twilio/twilio.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [TwilioModule, MailModule],
})
export class IntegrationsModule {}
