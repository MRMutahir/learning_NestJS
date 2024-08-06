import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import {  EducationController } from './user.education';

@Module({
  controllers: [UsersController,EducationController],
})
export class AppModule {}
