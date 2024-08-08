import { Injectable } from '@nestjs/common';

interface User {
  name: string;
  age: string;
  id: number;
}
// eslint-disable-next-line prettier/prettier
@Injectable()
export class UsersStore {
  private user = [
    // {
    //   name: 'Muhammad Mutahir',
    // },
  ];

  addUser(user) {
    this.user.push(user);
  }
}
