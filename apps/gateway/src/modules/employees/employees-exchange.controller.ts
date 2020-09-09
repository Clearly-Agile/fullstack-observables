import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { RabbitMQConfig } from '@libs/config';
import { ExchangeController } from '@libs/core/controllers';
import { Employee } from '@libs/models/employees';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesExchangeController extends ExchangeController<Employee> {
  public create(employee: Employee): void {
    this.logger.log(employee);
  }
}
