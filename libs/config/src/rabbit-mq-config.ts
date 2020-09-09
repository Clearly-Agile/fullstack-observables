export const RabbitMQConfig = {
  Exchanges: {
    Employees: 'agile-rabbit.employees',
  },
  RoutingKeys: {
    Employees: {
      Create: 'agile-rabbit.employees.create',
      Created: 'agile-rabbit.employees.created',
      Delete: 'agile-rabbit.employees.delete',
    },
  },
  Queues: {
    Employees: 'AGILE_RABBIT_EMPLOYEES_CREATE_QUEUE',
  },
};
