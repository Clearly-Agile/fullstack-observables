import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { RabbitMQConfig } from '@libs/config';
import { Module } from '@nestjs/common';

import { EmployeesExchangeController } from './employees-exchange.controller';
import { EmployeesService } from './employees.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: RabbitMQConfig.Exchanges.Employees,
          type: 'topic',
        },
      ],
      uri: 'amqp://guest:guest@localhost:5672',
    }),
  ],
  providers: [EmployeesService, EmployeesExchangeController],
})
export class EmployeesModule {}
