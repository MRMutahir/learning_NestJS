import { Controller, Get, Inject } from '@nestjs/common';

@Controller('/users')
export class UsersController {
  constructor(@Inject('EVENT_STORE') private eventBus: any) {
    console.log('this.eventBus', this.eventBus);
  }
  @Get('/v1')
  getUser() {
    return `SALAM every one`;
  }
}
