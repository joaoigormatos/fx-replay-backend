"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeOrderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_js_1 = require("../prisma/prisma.service.js");
const market_prices_js_1 = require("./market-prices.js");
const limit_order_handler_js_1 = require("./handlers/limit-order.handler.js");
const market_order_handler_js_1 = require("./handlers/market-order.handler.js");
const stop_order_handler_js_1 = require("./handlers/stop-order.handler.js");
let TradeOrderService = class TradeOrderService {
    prisma;
    handlers = {
        limit: new limit_order_handler_js_1.LimitOrderHandler(),
        market: new market_order_handler_js_1.MarketOrderHandler(),
        stop: new stop_order_handler_js_1.StopOrderHandler(),
    };
    constructor(prisma) {
        this.prisma = prisma;
    }
    serialize(order) {
        return {
            ...order,
            amount: Number(order.amount),
            price: Number(order.price),
        };
    }
    async create(dto) {
        if (dto.amount <= 0) {
            throw new common_1.BadRequestException('Amount must be greater than 0');
        }
        if (!(dto.pair in market_prices_js_1.MARKET_PRICES)) {
            throw new common_1.BadRequestException(`Invalid pair. Valid pairs: ${Object.keys(market_prices_js_1.MARKET_PRICES).join(', ')}`);
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
    async findOne(id) {
        const order = await this.prisma.tradeOrder.findUnique({
            where: { id, deletedAt: null },
        });
        if (!order) {
            throw new common_1.NotFoundException(`Trade order with id "${id}" not found`);
        }
        return this.serialize(order);
    }
    async update(id, dto) {
        const existing = await this.prisma.tradeOrder.findUnique({
            where: { id, deletedAt: null },
        });
        if (!existing) {
            throw new common_1.NotFoundException(`Trade order with id "${id}" not found`);
        }
        const side = dto.side ?? existing.side;
        const type = dto.type ?? existing.type;
        const pair = dto.pair ?? existing.pair;
        const price = dto.price ?? Number(existing.price);
        if (pair && !(pair in market_prices_js_1.MARKET_PRICES)) {
            throw new common_1.BadRequestException(`Invalid pair. Valid pairs: ${Object.keys(market_prices_js_1.MARKET_PRICES).join(', ')}`);
        }
        if (dto.amount !== undefined && dto.amount <= 0) {
            throw new common_1.BadRequestException('Amount must be greater than 0');
        }
        const handler = this.handlers[type];
        handler.validate({ side: side, price, pair: pair });
        const updated = await this.prisma.tradeOrder.update({
            where: { id },
            data: dto,
        });
        return this.serialize(updated);
    }
    async softDelete(id) {
        const existing = await this.prisma.tradeOrder.findUnique({
            where: { id, deletedAt: null },
        });
        if (!existing) {
            throw new common_1.NotFoundException(`Trade order with id "${id}" not found`);
        }
        return this.prisma.tradeOrder.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
};
exports.TradeOrderService = TradeOrderService;
exports.TradeOrderService = TradeOrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_js_1.PrismaService])
], TradeOrderService);
//# sourceMappingURL=trade-order.service.js.map