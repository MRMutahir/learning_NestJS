import { Module } from '@nestjs/common';
import { ApplicationStart } from './start.controller';
import { UserController } from './user.controller';
import { UserStore } from './user.store';

@Module({
  controllers: [ApplicationStart, UserController],
  providers: [UserStore], // No need for useClass if it's a direct class injection
})
export class AppModule {}
