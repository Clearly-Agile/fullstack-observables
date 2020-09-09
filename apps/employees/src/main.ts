import { Logger } from '@nestjs/common/services';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices/enums';
import {
    MicroserviceOptions
} from '@nestjs/microservices/interfaces/microservice-configuration.interface';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@localhost:5672'],
    },
  });

  app.startAllMicroservices();
  app.listen(3001);
}
bootstrap();
