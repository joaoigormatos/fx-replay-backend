import { OrderHandler, OrderValidationParams } from './order-handler.interface.js';

export class MarketOrderHandler implements OrderHandler {
  validate(_params: OrderValidationParams): void {
    // Market orders require no price validation
  }
}
