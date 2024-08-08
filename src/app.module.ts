import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersStore } from './user.store';

@Module({
  // controllers: [UsersController, EducationController, AdminController, IP],
  controllers: [UsersController],
  providers: [
    { provide: 'email', useValue: ['mutahir@gmail.com', '@gmail.com'] },
  ], // Array value
  // providers: [{ provide: 'DB_NAME', useValue: 'Muhammad Mutahir' }], // single value
  // providers: [UsersStore], // short hand
  // providers: [{ provide: UsersStore, useClass: UsersStore }],
})
export class AppModule {}
