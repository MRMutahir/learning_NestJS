import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

const is_dev_mode = false;
@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'EVENT_STORE',
      useFactory: () => {
        const eventBus = is_dev_mode
          ? new ReplaySubject(2)
          : new BehaviorSubject(null);

        return eventBus;
      },
    },
  ],
})
export class AppModule {}
