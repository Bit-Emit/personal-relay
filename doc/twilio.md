# Twilio setup
1. create twilio account
2. get `accountSid` and `token` from twilio console
3. add them to config.json
4. buy a phone number in twilio console
5. add webhook to twilio phone number. Webhook should point to GET `http://your-host:your-port/integrations/twilio/message`
