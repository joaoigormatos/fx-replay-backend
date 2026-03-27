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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeOrderController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const trade_order_service_js_1 = require("./trade-order.service.js");
const create_trade_order_dto_js_1 = require("./dto/create-trade-order.dto.js");
const update_trade_order_dto_js_1 = require("./dto/update-trade-order.dto.js");
let TradeOrderController = class TradeOrderController {
    tradeOrderService;
    constructor(tradeOrderService) {
        this.tradeOrderService = tradeOrderService;
    }
    async create(dto) {
        return this.tradeOrderService.create(dto);
    }
    async findAll(page, offset) {
        return this.tradeOrderService.findAll(page, offset);
    }
    async findOne(id) {
        return this.tradeOrderService.findOne(id);
    }
    async update(id, dto) {
        return this.tradeOrderService.update(id, dto);
    }
    async remove(id) {
        await this.tradeOrderService.softDelete(id);
    }
};
exports.TradeOrderController = TradeOrderController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new trade order' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Order created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation error' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_trade_order_dto_js_1.CreateTradeOrderDto]),
    __metadata("design:returntype", Promise)
], TradeOrderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List all trade orders (paginated)' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number, example: 1 }),
    (0, swagger_1.ApiQuery)({ name: 'offset', required: false, type: Number, example: 10 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Paginated list of orders' }),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('offset', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], TradeOrderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single trade order by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'UUID of the trade order' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The trade order' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Order not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TradeOrderController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing trade order' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'UUID of the trade order' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Order updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation error' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Order not found' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_trade_order_dto_js_1.UpdateTradeOrderDto]),
    __metadata("design:returntype", Promise)
], TradeOrderController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete a trade order' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'UUID of the trade order' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Order deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Order not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TradeOrderController.prototype, "remove", null);
exports.TradeOrderController = TradeOrderController = __decorate([
    (0, swagger_1.ApiTags)('Trade Orders'),
    (0, common_1.Controller)('trade_orders'),
    __metadata("design:paramtypes", [trade_order_service_js_1.TradeOrderService])
], TradeOrderController);
//# sourceMappingURL=trade-order.controller.js.map