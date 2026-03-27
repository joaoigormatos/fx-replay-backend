import { PrismaService } from '../prisma/prisma.service.js';
import { CreateTradeOrderDto } from './dto/create-trade-order.dto.js';
import { UpdateTradeOrderDto } from './dto/update-trade-order.dto.js';
export declare class TradeOrderService {
    private readonly prisma;
    private handlers;
    constructor(prisma: PrismaService);
    private serialize;
    create(dto: CreateTradeOrderDto): Promise<any>;
    findAll(page?: number, offset?: number): Promise<{
        data: any[];
        page: number;
        offset: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<any>;
    update(id: string, dto: UpdateTradeOrderDto): Promise<any>;
    softDelete(id: string): Promise<{
        id: string;
        side: string;
        type: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        price: import("@prisma/client/runtime/library").Decimal;
        status: string;
        pair: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
}
