import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { RabbitMQConfig } from '@libs/config';
import { ExchangeController } from '@libs/core/controllers';
import { Employee } from '@libs/models/employees';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesExchangeController extends ExchangeController<Employee> {
  
  @RabbitSubscribe({
    exchange: RabbitMQConfig.Exchanges.Employees,
    routingKey: RabbitMQConfig.RoutingKeys.Employees.Create,
    queue: RabbitMQConfig.Queues.Employees,
  })
  public create(employee: Employee): void {
    this.logger.verbose('This is from the microservice!!!');
    this.logger.verbose(employee);
    
  }
}
