import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from './mail.service';
import { getConfig } from '../../config/config';

const config = getConfig();

@Module({
  providers: [MailService],
  imports: [
    MailerModule.forRoot({
      transport: {
        host: config.integrations.mail.host,
        secure: false,
        auth: {
          user: config.integrations.mail.user,
          pass: config.integrations.mail.password,
        },
      },
    }),
  ],
})
export class MailModule {}
