import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('/admin')
export class AdminController {
  @Get('/profile/:id')
  getadminProfileWithParams(@Param() params: any) {
    console.log('params', params);
    return {
      data: 'Well come my server params',
    };
  }

  @Get('/profile')
  getadminProfileWithQuery(@Query() query: any) {
    console.log('query', query);
    return {
      data: 'Well come my server query',
    };
  }

  @Post('/video')
  getVideoData(@Body() body: any) {
    console.log('body', body);
    return {
      email: body.email,
      password: body.password,
    };
  }
}
