export declare class UpdateTradeOrderDto {
    side?: 'buy' | 'sell';
    type?: 'limit' | 'market' | 'stop';
    amount?: number;
    price?: number;
    pair?: string;
    status?: 'open' | 'cancelled' | 'executed';
}
