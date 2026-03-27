import { BadRequestException } from '@nestjs/common';
import { MARKET_PRICES } from '../market-prices.js';
import {
  OrderHandler,
  OrderValidationParams,
} from './order-handler.interface.js';

export class LimitOrderHandler implements OrderHandler {
  validate({ side, price, pair }: OrderValidationParams): void {
    const marketPrice = MARKET_PRICES[pair];

    if (side === 'buy' && price >= marketPrice) {
      throw new BadRequestException(
        `Buy limit order price must be lower than market price (${marketPrice})`,
      );
    }

    if (side === 'sell' && price <= marketPrice) {
      throw new BadRequestException(
        `Sell limit order price must be higher than market price (${marketPrice})`,
      );
    }
  }
}
