import { Controller, Get, Inject, Query } from '@nestjs/common';
import { UserStore } from './user.store';

@Controller('/users')
export class UserController {
  constructor(@Inject(UserStore) private store) {
    console.log('side effect provider');
  }
  @Get()
  getUser(@Query('name') name: string) {
    console.log('query', name);
    return `<h1>SALAM ${name}</h1>`;
  }
}
