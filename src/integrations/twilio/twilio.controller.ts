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
    const query = request.query.body;
    this.twilioService.publishMessage(query.Body, query.From);
    return 'twilio webhook return';
  }
}
