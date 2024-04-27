import { Controller, Get, Req } from '@nestjs/common';
import { TwilioService } from './twilio.service';

@Controller('integrations/twilio')
export class TwilioController {
  constructor(private readonly twilioService: TwilioService) {}
  @Get('message')
  webhook(@Req() request: Request) {
    console.log(request);
    console.log(Object.keys(request));
    // @ts-ignore
    this.twilioService.publishMessage(request.query.Body, request.query.From);
    return 'twilio webhook return';
  }
}
