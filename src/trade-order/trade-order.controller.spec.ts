import { Test, TestingModule } from '@nestjs/testing';
import { TradeOrderController } from './trade-order.controller.js';
import { TradeOrderService } from './trade-order.service.js';

const mockService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  softDelete: jest.fn(),
};

const paginatedResponse = {
  data: [{ id: '1' }, { id: '2' }],
  page: 1,
  offset: 10,
  totalPages: 1,
};

describe('TradeOrderController', () => {
  let controller: TradeOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TradeOrderController],
      providers: [
        { provide: TradeOrderService, useValue: mockService },
      ],
    }).compile();

    controller = module.get<TradeOrderController>(TradeOrderController);
    jest.clearAllMocks();
  });

  describe('POST /trade_orders', () => {
    it('should create and return a new order', async () => {
      const dto = {
        side: 'buy' as const,
        type: 'limit' as const,
        amount: 1.5,
        price: 100000,
        pair: 'BTCUSD',
      };
      const created = { id: 'uuid', ...dto, status: 'open' };
      mockService.create.mockResolvedValue(created);

      const result = await controller.create(dto);

      expect(mockService.create).toHaveBeenCalledWith(dto);
      expect(result).toEqual(created);
    });
  });

  describe('GET /trade_orders', () => {
    it('should return paginated orders with default params', async () => {
      mockService.findAll.mockResolvedValue(paginatedResponse);

      const result = await controller.findAll(1, 10);

      expect(mockService.findAll).toHaveBeenCalledWith(1, 10);
      expect(result).toEqual(paginatedResponse);
    });

    it('should pass page and offset query params to service', async () => {
      mockService.findAll.mockResolvedValue({ ...paginatedResponse, page: 3 });

      const result = await controller.findAll(3, 20);

      expect(mockService.findAll).toHaveBeenCalledWith(3, 20);
      expect(result.page).toBe(3);
    });
  });

  describe('GET /trade_orders/:id', () => {
    it('should return a single order', async () => {
      const order = { id: 'uuid-1', side: 'buy', type: 'limit' };
      mockService.findOne.mockResolvedValue(order);

      const result = await controller.findOne('uuid-1');

      expect(mockService.findOne).toHaveBeenCalledWith('uuid-1');
      expect(result).toEqual(order);
    });
  });

  describe('PUT /trade_orders/:id', () => {
    it('should update and return the order', async () => {
      const updated = { id: 'uuid-1', side: 'buy', type: 'limit', amount: 2.5 };
      mockService.update.mockResolvedValue(updated);

      const result = await controller.update('uuid-1', { amount: 2.5 });

      expect(mockService.update).toHaveBeenCalledWith('uuid-1', { amount: 2.5 });
      expect(result).toEqual(updated);
    });
  });

  describe('DELETE /trade_orders/:id', () => {
    it('should soft delete the order', async () => {
      mockService.softDelete.mockResolvedValue(undefined);

      await controller.remove('uuid-1');

      expect(mockService.softDelete).toHaveBeenCalledWith('uuid-1');
    });
  });
});
