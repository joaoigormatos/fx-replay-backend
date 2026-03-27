export declare class CreateTradeOrderDto {
    side: 'buy' | 'sell';
    type: 'limit' | 'market' | 'stop';
    amount: number;
    price: number;
    pair: string;
}
