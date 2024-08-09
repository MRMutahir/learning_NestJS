import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class UserStore {
  constructor() {
    console.log('UserStore provider initialized');
    let obj = {
      name: ' Muhammad Mutahir',
      age: 18,
      location: 'Gulshan Iqbal',
    };
    console.log('obj', obj)
  }

  getProvider() {
    return 'UserStore provider method called';
  }
}
