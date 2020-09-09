import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { RabbitMQConfig } from '@libs/config';
import { ApiClientController } from '@libs/core/controllers/api-client.controller';
import { Employee } from '@libs/models/employees';
import { Controller, Get } from '@nestjs/common';

@Controller('employees')
export class EmployeesController extends ApiClientController<Employee> {
  constructor(connection: AmqpConnection) {
    super(connection);
  }

  @Get()
  public get(): void {
    this.connection.publish(
      RabbitMQConfig.Exchanges.Employees,
      RabbitMQConfig.RoutingKeys.Employees.Create,
      {
        name: 'Zev Butler',
      },
    );
  }
}
