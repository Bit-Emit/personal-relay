# Personal relay

Connect your communication channels. General purpose customizable relay for bridging communication channels like 
SMS, Email, Signal, Telegram, WhatsApp, etc... Configure your desired integration and start receiving messages and
resending them to other channels. Are you tired of spam callers? Buy twilio number and forward your SMS to Email.


![Personal relay](./doc/title.png)

## Integrations
- [Twilio](./doc/twilio.md)
- [Email](./doc/email.md)

Feel free to add more integrations 😉


## Setup

1. Create `config.json` file

2. create `docker-compose.yml`
```yml
version: '3.9'

services:
  personal-relay:
    container_name: personal-relay
    image: ghcr.io/bit-emit/personal-relay:latest
    volumes:
        - ./config.json:/app/config.json
    ports:  ['3000:3000']
    expose:
      - 3000

```

3. Run container
```bash
docker compose up -d
```


## Configuration
Relay is configured using `config.json` file. Here is example configuration file:

```
{
  "port": 3000,
  "host": "localhost",
  "integrations": {
    "twilio": {
      "accountSid": "XXXXXXXXXXXXXXXX"
      "token": "XXXXXXXXXXXXXXXX",
      "listener": {}
    },
    "mail": {
      "host": "smtp.mail-server.com",
      "user": "user@mail-server.com",
      "password": "EMAIL_PASSWORD",
      "listener": {
        "on": "message.*",
        "sendTo": "emial_destination@gmail.com"
      }
    }
  }
}
```
- **port** - port on which relay will listen
- **host** - host on which relay will listen
- **integrations**
  - **twilio**
    - **accountSid** - Twilio account SID
    - **token** - Twilio token
  - **mail**
    - **host** - SMTP server host
    - **user** - SMTP server user
    - **password** - SMTP server password
    - **listener**
      - **on** - event on which to listen
      - **sendTo** - email to which to send messages

  
### Listeners
Listeners are used to listen for events and forward them to other channels. Listeners are configured in `config.json` file.
Events follow pattern `message.{nameOfIntegration}`. For example, to listen for Twilio messages, you would use `message.twilio.*`.

## Development

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

