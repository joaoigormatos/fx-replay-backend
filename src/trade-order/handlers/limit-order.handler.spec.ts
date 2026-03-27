import { LimitOrderHandler } from './limit-order.handler.js';
import { BadRequestException } from '@nestjs/common';

describe('LimitOrderHandler', () => {
  const handler = new LimitOrderHandler();

  describe('buy limit order', () => {
    it('should accept price lower than market price', () => {
      expect(() =>
        handler.validate({ side: 'buy', price: 100000, pair: 'BTCUSD' }),
      ).not.toThrow();
    });

    it('should reject price equal to market price', () => {
      expect(() =>
        handler.validate({ side: 'buy', price: 100150.4, pair: 'BTCUSD' }),
      ).toThrow(BadRequestException);
    });

    it('should reject price higher than market price', () => {
      expect(() =>
        handler.validate({ side: 'buy', price: 100200, pair: 'BTCUSD' }),
      ).toThrow(BadRequestException);
    });
  });

  describe('sell limit order', () => {
    it('should accept price higher than market price', () => {
      expect(() =>
        handler.validate({ side: 'sell', price: 100200, pair: 'BTCUSD' }),
      ).not.toThrow();
    });

    it('should reject price equal to market price', () => {
      expect(() =>
        handler.validate({ side: 'sell', price: 100150.4, pair: 'BTCUSD' }),
      ).toThrow(BadRequestException);
    });

    it('should reject price lower than market price', () => {
      expect(() =>
        handler.validate({ side: 'sell', price: 100000, pair: 'BTCUSD' }),
      ).toThrow(BadRequestException);
    });
  });

  it('should work with EURUSD pair', () => {
    expect(() =>
      handler.validate({ side: 'buy', price: 1.0, pair: 'EURUSD' }),
    ).not.toThrow();
    expect(() =>
      handler.validate({ side: 'sell', price: 1.0, pair: 'EURUSD' }),
    ).toThrow(BadRequestException);
  });
});
