import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module.js';
import { TradeOrderModule } from './trade-order/trade-order.module.js';

@Module({
  imports: [PrismaModule, TradeOrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
