// import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
// // import { Request } from 'express';

import { Controller, Inject, Optional } from '@nestjs/common';
import { UsersStore } from './user.store';

// @Controller('/users')
// export class UsersController {
//   @Get('/profile')
//   @HttpCode(204)
//   getProfile(@Req() req) {
//     return {
//       message: 'SALAM to all of you!',
//       description:
//         'Welcome to the profile route of the UsersController. I am currently learning NestJS to enhance my backend development skills.',
//       data: {
//         name: 'Muhammad Mutahir',
//         role: 'Web Developer',
//         technologies: [
//           'MERN',
//           'Node',
//           'Express',
//           'MongoDB',
//           'React',
//           'JavaScript',
//           'Next.js',
//           'Sanity',
//           'HTML',
//           'CSS',
//           'Tailwind',
//           'Firebase',
//           'Redux',
//           'Figma',
//           'TypeScript',
//         ],
//         learning: 'NestJS',
//         currentEmploy: {
//           company: 'gr-tech',
//           jobRole: 'Backend Developer',
//         },
//       },
//     };
//   }
// }

// both way are correct
// @Controller()
// export class UsersController {
//   constructor(private readonly store: UsersStore) {
//     console.log('this.store', this.store);
//   }
// }

// @Controller()
// export class UsersController {
//   constructor(@Optional()private readonly store: UsersStore) {
//     console.log('this.store', this.store);
//   }
// }
// @Controller()
// export class UsersController {
//   constructor(@Inject(UsersStore) private readonly store: UsersStore) {
//     console.log('this.store', this.store);
//   }
// }

// Single Value

// @Controller()
// export class UsersController {
//   constructor(@Inject('DB_NAME') private  dbName) {
//     console.log('this.store', this.dbName);
//   }
// }


// Array Value

@Controller()
export class UsersController {
  constructor(@Inject('email') private  email) {
    console.log('this.store', this.email);
  }
}
