import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { TradeOrderService } from './trade-order.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

const mockPrisma = {
  tradeOrder: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    count: jest.fn(),
  },
};

describe('TradeOrderService', () => {
  let service: TradeOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TradeOrderService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<TradeOrderService>(TradeOrderService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a valid buy limit order', async () => {
      const dto = {
        side: 'buy' as const,
        type: 'limit' as const,
        amount: 1.5,
        price: 100000,
        pair: 'BTCUSD',
      };
      const entity = { id: 'uuid', ...dto, status: 'open' };
      mockPrisma.tradeOrder.create.mockResolvedValue(entity);

      const result = await service.create(dto);

      expect(mockPrisma.tradeOrder.create).toHaveBeenCalledWith({
        data: {
          side: dto.side,
          type: dto.type,
          amount: dto.amount,
          price: dto.price,
          pair: dto.pair,
        },
      });
      expect(result).toEqual(entity);
    });

    it('should reject amount of 0', async () => {
      const dto = {
        side: 'buy' as const,
        type: 'market' as const,
        amount: 0,
        price: 100000,
        pair: 'BTCUSD',
      };

      await expect(service.create(dto)).rejects.toThrow(BadRequestException);
    });

    it('should reject negative amount', async () => {
      const dto = {
        side: 'buy' as const,
        type: 'market' as const,
        amount: -1,
        price: 100000,
        pair: 'BTCUSD',
      };

      await expect(service.create(dto)).rejects.toThrow(BadRequestException);
    });

    it('should reject invalid pair', async () => {
      const dto = {
        side: 'buy' as const,
        type: 'market' as const,
        amount: 1,
        price: 100,
        pair: 'XYZUSD',
      };

      await expect(service.create(dto)).rejects.toThrow(BadRequestException);
    });

    it('should reject buy limit order with price above market', async () => {
      const dto = {
        side: 'buy' as const,
        type: 'limit' as const,
        amount: 1,
        price: 200000,
        pair: 'BTCUSD',
      };

      await expect(service.create(dto)).rejects.toThrow(BadRequestException);
    });

    it('should reject sell stop order with price above market', async () => {
      const dto = {
        side: 'sell' as const,
        type: 'stop' as const,
        amount: 1,
        price: 200000,
        pair: 'BTCUSD',
      };

      await expect(service.create(dto)).rejects.toThrow(BadRequestException);
    });

    it('should accept market order without price validation', async () => {
      const dto = {
        side: 'buy' as const,
        type: 'market' as const,
        amount: 1,
        price: 999999,
        pair: 'BTCUSD',
      };
      const entity = { id: 'uuid', ...dto, status: 'open' };
      mockPrisma.tradeOrder.create.mockResolvedValue(entity);

      const result = await service.create(dto);
      expect(result).toEqual(entity);
    });
  });

  describe('findAll', () => {
    it('should return paginated orders with defaults (page=1, offset=10)', async () => {
      const orders = [{ id: '1', amount: 1.5, price: 100000 }, { id: '2', amount: 2, price: 50000 }];
      mockPrisma.tradeOrder.findMany.mockResolvedValue(orders);
      mockPrisma.tradeOrder.count.mockResolvedValue(2);

      const result = await service.findAll();

      expect(mockPrisma.tradeOrder.findMany).toHaveBeenCalledWith({
        skip: 0,
        take: 10,
        orderBy: { createdAt: 'desc' },
        where: { deletedAt: null },
      });
      expect(result).toEqual({
        data: orders,
        page: 1,
        offset: 10,
        totalPages: 1,
      });
    });

    it('should return paginated orders for a specific page', async () => {
      const orders = [{ id: '11', amount: 1, price: 3000 }];
      mockPrisma.tradeOrder.findMany.mockResolvedValue(orders);
      mockPrisma.tradeOrder.count.mockResolvedValue(25);

      const result = await service.findAll(2, 10);

      expect(mockPrisma.tradeOrder.findMany).toHaveBeenCalledWith({
        skip: 10,
        take: 10,
        orderBy: { createdAt: 'desc' },
        where: { deletedAt: null },
      });
      expect(result).toEqual({
        data: orders,
        page: 2,
        offset: 10,
        totalPages: 3,
      });
    });

    it('should handle custom offset', async () => {
      const orders = [{ id: '1', amount: 1, price: 1000 }];
      mockPrisma.tradeOrder.findMany.mockResolvedValue(orders);
      mockPrisma.tradeOrder.count.mockResolvedValue(50);

      const result = await service.findAll(1, 25);

      expect(mockPrisma.tradeOrder.findMany).toHaveBeenCalledWith({
        skip: 0,
        take: 25,
        orderBy: { createdAt: 'desc' },
        where: { deletedAt: null },
      });
      expect(result).toEqual({
        data: orders,
        page: 1,
        offset: 25,
        totalPages: 2,
      });
    });

    it('should return 0 totalPages when no orders exist', async () => {
      mockPrisma.tradeOrder.findMany.mockResolvedValue([]);
      mockPrisma.tradeOrder.count.mockResolvedValue(0);

      const result = await service.findAll();

      expect(result).toEqual({
        data: [],
        page: 1,
        offset: 10,
        totalPages: 0,
      });
    });

    it('should exclude soft-deleted orders from listing', async () => {
      mockPrisma.tradeOrder.findMany.mockResolvedValue([]);
      mockPrisma.tradeOrder.count.mockResolvedValue(0);

      await service.findAll();

      expect(mockPrisma.tradeOrder.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { deletedAt: null } }),
      );
      expect(mockPrisma.tradeOrder.count).toHaveBeenCalledWith({
        where: { deletedAt: null },
      });
    });
  });

  describe('findOne', () => {
    it('should return a single order by id', async () => {
      const order = { id: 'uuid-1', side: 'buy', type: 'limit', status: 'open', amount: 1.5, price: 100000 };
      mockPrisma.tradeOrder.findUnique.mockResolvedValue(order);

      const result = await service.findOne('uuid-1');

      expect(mockPrisma.tradeOrder.findUnique).toHaveBeenCalledWith({
        where: { id: 'uuid-1', deletedAt: null },
      });
      expect(result).toEqual(order);
    });

    it('should throw NotFoundException when order does not exist', async () => {
      mockPrisma.tradeOrder.findUnique.mockResolvedValue(null);

      await expect(service.findOne('nonexistent')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update an existing order', async () => {
      const existing = { id: 'uuid-1', side: 'buy', type: 'limit', amount: 1, price: 100000, pair: 'BTCUSD', status: 'open', deletedAt: null };
      const updated = { ...existing, amount: 2.5 };
      mockPrisma.tradeOrder.findUnique.mockResolvedValue(existing);
      mockPrisma.tradeOrder.update.mockResolvedValue(updated);

      const result = await service.update('uuid-1', { amount: 2.5 });

      expect(mockPrisma.tradeOrder.update).toHaveBeenCalledWith({
        where: { id: 'uuid-1' },
        data: { amount: 2.5 },
      });
      expect(result).toEqual(updated);
    });

    it('should throw NotFoundException when updating nonexistent order', async () => {
      mockPrisma.tradeOrder.findUnique.mockResolvedValue(null);

      await expect(service.update('nonexistent', { amount: 1 })).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should validate price when updating a limit order price', async () => {
      const existing = { id: 'uuid-1', side: 'buy', type: 'limit', amount: 1, price: 100000, pair: 'BTCUSD', status: 'open', deletedAt: null };
      mockPrisma.tradeOrder.findUnique.mockResolvedValue(existing);

      await expect(
        service.update('uuid-1', { price: 200000 }),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('softDelete', () => {
    it('should soft delete an order by setting deletedAt', async () => {
      const existing = { id: 'uuid-1', status: 'open', deletedAt: null };
      mockPrisma.tradeOrder.findUnique.mockResolvedValue(existing);
      mockPrisma.tradeOrder.update.mockResolvedValue({ ...existing, deletedAt: new Date() });

      await service.softDelete('uuid-1');

      expect(mockPrisma.tradeOrder.update).toHaveBeenCalledWith({
        where: { id: 'uuid-1' },
        data: { deletedAt: expect.any(Date) },
      });
    });

    it('should throw NotFoundException when deleting nonexistent order', async () => {
      mockPrisma.tradeOrder.findUnique.mockResolvedValue(null);

      await expect(service.softDelete('nonexistent')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
