import { OrderHandler, OrderValidationParams } from './order-handler.interface.js';
export declare class MarketOrderHandler implements OrderHandler {
    validate(_params: OrderValidationParams): void;
}
