import { Module } from '@nestjs/common';
import { ShopModule } from 'src/shop/shop.module';

@Module({
  imports: [ShopModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
