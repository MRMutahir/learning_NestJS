import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { EducationController } from './user.education';
import { AdminController } from './admin.controller';
import { IP } from './ip.domain';

@Module({
  controllers: [UsersController, EducationController, AdminController,IP],
})
export class AppModule {}
