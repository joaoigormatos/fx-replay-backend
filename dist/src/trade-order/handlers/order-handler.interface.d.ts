export interface OrderValidationParams {
    side: 'buy' | 'sell';
    price: number;
    pair: string;
}
export interface OrderHandler {
    validate(params: OrderValidationParams): void;
}
