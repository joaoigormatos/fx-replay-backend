import { TradeOrderService } from './trade-order.service.js';
import { CreateTradeOrderDto } from './dto/create-trade-order.dto.js';
import { UpdateTradeOrderDto } from './dto/update-trade-order.dto.js';
export declare class TradeOrderController {
    private readonly tradeOrderService;
    constructor(tradeOrderService: TradeOrderService);
    create(dto: CreateTradeOrderDto): Promise<any>;
    findAll(page: number, offset: number): Promise<{
        data: any[];
        page: number;
        offset: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<any>;
    update(id: string, dto: UpdateTradeOrderDto): Promise<any>;
    remove(id: string): Promise<void>;
}
