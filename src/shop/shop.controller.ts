import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommonOutputDTO, ShopInfoInputDTO } from 'src/shop/dtos/shop.dto';

import { ShopService } from 'src/shop/shop.service';

@Controller('/api')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('/hello-world')
  helloWorld() {
    return this.shopService.getHello();
  }

  @Get('/:id')
  findOne(@Param() params: any): string {
    return `저는 #${params.id}번째 id를 가지고 있습니다`;
  }

  @Post('/hello-body')
  helloBody(@Body() body: ShopInfoInputDTO): CommonOutputDTO {
    return { success: true, result: body };
  }
}
