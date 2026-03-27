import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateTradeOrderDto } from './dto/create-trade-order.dto.js';
import { UpdateTradeOrderDto } from './dto/update-trade-order.dto.js';
import { MARKET_PRICES } from './market-prices.js';
import { OrderHandler } from './handlers/order-handler.interface.js';
import { LimitOrderHandler } from './handlers/limit-order.handler.js';
import { MarketOrderHandler } from './handlers/market-order.handler.js';
import { StopOrderHandler } from './handlers/stop-order.handler.js';

@Injectable()
export class TradeOrderService {
  private handlers: Record<string, OrderHandler> = {
    limit: new LimitOrderHandler(),
    market: new MarketOrderHandler(),
    stop: new StopOrderHandler(),
  };

  constructor(private readonly prisma: PrismaService) {}

  private serialize(order: any) {
    return {
      ...order,
      amount: Number(order.amount),
      price: Number(order.price),
    };
  }

  async create(dto: CreateTradeOrderDto) {
    if (dto.amount <= 0) {
      throw new BadRequestException('Amount must be greater than 0');
    }

    if (!(dto.pair in MARKET_PRICES)) {
      throw new BadRequestException(
        `Invalid pair. Valid pairs: ${Object.keys(MARKET_PRICES).join(', ')}`,
      );
    }

    const handler = this.handlers[dto.type];
    handler.validate({ side: dto.side, price: dto.price, pair: dto.pair });

    const order = await this.prisma.tradeOrder.create({
      data: {
        side: dto.side,
        type: dto.type,
        amount: dto.amount,
        price: dto.price,
        pair: dto.pair,
      },
    });

    return this.serialize(order);
  }

  async findAll(page = 1, offset = 10) {
    const where = { deletedAt: null };

    const [data, total] = await Promise.all([
      this.prisma.tradeOrder.findMany({
        skip: (page - 1) * offset,
        take: offset,
        orderBy: { createdAt: 'desc' },
        where,
      }),
      this.prisma.tradeOrder.count({ where }),
    ]);

    return {
      data: data.map((o) => this.serialize(o)),
      page,
      offset,
      totalPages: total === 0 ? 0 : Math.ceil(total / offset),
    };
  }

  async findOne(id: string) {
    const order = await this.prisma.tradeOrder.findUnique({
      where: { id, deletedAt: null },
    });

    if (!order) {
      throw new NotFoundException(`Trade order with id "${id}" not found`);
    }

    return this.serialize(order);
  }

  async update(id: string, dto: UpdateTradeOrderDto) {
    const existing = await this.prisma.tradeOrder.findUnique({
      where: { id, deletedAt: null },
    });

    if (!existing) {
      throw new NotFoundException(`Trade order with id "${id}" not found`);
    }

    const side = dto.side ?? existing.side;
    const type = dto.type ?? existing.type;
    const pair = dto.pair ?? existing.pair;
    const price = dto.price ?? Number(existing.price);

    if (pair && !(pair in MARKET_PRICES)) {
      throw new BadRequestException(
        `Invalid pair. Valid pairs: ${Object.keys(MARKET_PRICES).join(', ')}`,
      );
    }

    if (dto.amount !== undefined && dto.amount <= 0) {
      throw new BadRequestException('Amount must be greater than 0');
    }

    const handler = this.handlers[type as string];
    handler.validate({ side: side as 'buy' | 'sell', price, pair: pair as string });

    const updated = await this.prisma.tradeOrder.update({
      where: { id },
      data: dto,
    });

    return this.serialize(updated);
  }

  async softDelete(id: string) {
    const existing = await this.prisma.tradeOrder.findUnique({
      where: { id, deletedAt: null },
    });

    if (!existing) {
      throw new NotFoundException(`Trade order with id "${id}" not found`);
    }

    return this.prisma.tradeOrder.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
