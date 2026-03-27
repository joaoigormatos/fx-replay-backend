import { Module } from '@nestjs/common';
import { TradeOrderController } from './trade-order.controller.js';
import { TradeOrderService } from './trade-order.service.js';

@Module({
  controllers: [TradeOrderController],
  providers: [TradeOrderService],
})
export class TradeOrderModule {}
