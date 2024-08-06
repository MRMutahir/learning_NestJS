import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
// import { Request } from 'express';

@Controller('/users')
export class UsersController {
  @Get('/profile')
  @HttpCode(204)
  getProfile(@Req() req) {
    return {
      message: 'SALAM to all of you!',
      description:
        'Welcome to the profile route of the UsersController. I am currently learning NestJS to enhance my backend development skills.',
      data: {
        name: 'Muhammad Mutahir',
        role: 'Web Developer',
        technologies: [
          'MERN',
          'Node',
          'Express',
          'MongoDB',
          'React',
          'JavaScript',
          'Next.js',
          'Sanity',
          'HTML',
          'CSS',
          'Tailwind',
          'Firebase',
          'Redux',
          'Figma',
          'TypeScript',
        ],
        learning: 'NestJS',
        currentEmploy: {
          company: 'gr-tech',
          jobRole: 'Backend Developer',
        },
      },
    };
  }
}
