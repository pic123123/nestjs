import { Module } from '@nestjs/common';
import { ShopController } from 'src/shop/shop.controller';
import { ShopService } from 'src/shop/shop.service';

@Module({
  imports: [],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
