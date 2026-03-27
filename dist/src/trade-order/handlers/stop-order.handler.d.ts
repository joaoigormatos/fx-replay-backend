import { OrderHandler, OrderValidationParams } from './order-handler.interface.js';
export declare class StopOrderHandler implements OrderHandler {
    validate({ side, price, pair }: OrderValidationParams): void;
}
