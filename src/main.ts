import { getConfig } from './config/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const config = getConfig();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.port);
}
bootstrap();
