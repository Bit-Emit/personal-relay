import { Controller, Get, Req } from '@nestjs/common';
import { TwilioService } from './twilio.service';

@Controller('integrations/twilio')
export class TwilioController {
  constructor(private readonly twilioService: TwilioService) {}
  @Get('message')
  webhook(@Req() request: Request) {
    console.log(request);
    return 'twilio webhook return';
  }
}
