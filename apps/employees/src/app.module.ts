import { Module } from '@nestjs/common';

import { EmployeesModule } from './modules';

@Module({
  imports: [EmployeesModule],
})
export class AppModule {}
