export const RabbitMQConfig = {
  Exchanges: {
    Employees: 'agile-rabbit.employees',
  },
  RoutingKeys: {
    Employees: {
      Create: 'agile-rabbit.employees.create',
    },
  },
  Queues: {
    Employees: 'AGILE_RABBIT_EMPLOYEES_CREATE_QUEUE',
  },
};
