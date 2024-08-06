import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Req,
  Res,
  Header,
  Redirect,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { url } from 'inspector';

@Controller('/education')
export class EducationController {
  @Get()
  getEducation(@Req() req: Request) {
    console.log('req', req);
    return {
      education: 'Inter Web Developer',
    };
  }

  @Get('/edu-pro')
  @HttpCode(HttpStatus.CREATED) // Set the status code to 201
  @Header('Cache-Control', 'none') // Set a custom header
  // @Redirect('/education/account',302)
  getEducationProfile(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return { url: '/account', statusCode: 304 }; // Send JSON response with status
  }

  @Get('/account')
  redirectAccount() {
    return {
      message: 'Working Account', // Use 'message' key for consistent response structure
    };
  }
}
