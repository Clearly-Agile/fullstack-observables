import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { ApiClientController } from '@libs/core/controllers/api-client.controller';
import { Employee } from '@libs/models/employees';
import { Controller, Post, Body } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Observable } from 'rxjs';

@Controller('employees')
export class EmployeesController extends ApiClientController<Employee> {
  constructor(connection: AmqpConnection, private readonly employeesService: EmployeesService) {
    super(connection);
  }

  @Post()
  public post(@Body() employee: Employee): Observable<void> {
    return this.employeesService.save(employee);
  }
}
