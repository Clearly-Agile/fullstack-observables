import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from '@libs/models/employees';
import { RabbitMQConfig } from '@libs/config';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { from } from 'rxjs/internal/observable/from';

@Injectable()
export class EmployeesService {
    constructor(private readonly connection: AmqpConnection) {}

    public save(employee: Employee): Observable<void> {
        return from(this.connection.publish(RabbitMQConfig.Exchanges.Employees, RabbitMQConfig.RoutingKeys.Employees.Create, employee));
    }

}
