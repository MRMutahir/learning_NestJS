import { Controller, Get } from '@nestjs/common';

@Controller("/v1")
export class ApplicationStart {
  @Get('/salam')
  getApp() {
    return {
      message: 'SALAM, welcome to my NestJS project!',
    };
  }
}
