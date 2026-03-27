import { MarketOrderHandler } from './market-order.handler.js';

describe('MarketOrderHandler', () => {
  const handler = new MarketOrderHandler();

  it('should accept any buy market order regardless of price', () => {
    expect(() =>
      handler.validate({ side: 'buy', price: 999999, pair: 'BTCUSD' }),
    ).not.toThrow();
  });

  it('should accept any sell market order regardless of price', () => {
    expect(() =>
      handler.validate({ side: 'sell', price: 0.001, pair: 'ETHUSD' }),
    ).not.toThrow();
  });
});
