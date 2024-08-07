import { Get, Req, Res, Ip, Controller } from '@nestjs/common';
@Controller({
  path: '/vi'
//   host: 'facebook.com', Sub-Domain Routing 
})
export class IP {
  @Get('/ip')
  getIp(@Res() res: any, @Ip() ip: string) {
    console.log('ip', ip);
    res.json(ip);
  }
}
