import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { EducationController } from './user.education';
import { AdminController } from './admin.controller';

@Module({
  controllers: [UsersController, EducationController, AdminController],
})
export class AppModule {}
