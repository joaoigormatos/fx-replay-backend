import { StopOrderHandler } from './stop-order.handler.js';
import { BadRequestException } from '@nestjs/common';

describe('StopOrderHandler', () => {
  const handler = new StopOrderHandler();

  describe('buy stop order', () => {
    it('should accept price higher than market price', () => {
      expect(() =>
        handler.validate({ side: 'buy', price: 100200, pair: 'BTCUSD' }),
      ).not.toThrow();
    });

    it('should reject price equal to market price', () => {
      expect(() =>
        handler.validate({ side: 'buy', price: 100150.4, pair: 'BTCUSD' }),
      ).toThrow(BadRequestException);
    });

    it('should reject price lower than market price', () => {
      expect(() =>
        handler.validate({ side: 'buy', price: 100000, pair: 'BTCUSD' }),
      ).toThrow(BadRequestException);
    });
  });

  describe('sell stop order', () => {
    it('should accept price lower than market price', () => {
      expect(() =>
        handler.validate({ side: 'sell', price: 100000, pair: 'BTCUSD' }),
      ).not.toThrow();
    });

    it('should reject price equal to market price', () => {
      expect(() =>
        handler.validate({ side: 'sell', price: 100150.4, pair: 'BTCUSD' }),
      ).toThrow(BadRequestException);
    });

    it('should reject price higher than market price', () => {
      expect(() =>
        handler.validate({ side: 'sell', price: 100200, pair: 'BTCUSD' }),
      ).toThrow(BadRequestException);
    });
  });

  it('should work with ETHUSD pair', () => {
    expect(() =>
      handler.validate({ side: 'buy', price: 3400, pair: 'ETHUSD' }),
    ).not.toThrow();
    expect(() =>
      handler.validate({ side: 'sell', price: 3200, pair: 'ETHUSD' }),
    ).not.toThrow();
  });
});
