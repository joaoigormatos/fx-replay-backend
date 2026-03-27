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
exports.CreateTradeOrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTradeOrderDto {
    side;
    type;
    amount;
    price;
    pair;
}
exports.CreateTradeOrderDto = CreateTradeOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['buy', 'sell'], example: 'buy' }),
    (0, class_validator_1.IsIn)(['buy', 'sell']),
    __metadata("design:type", String)
], CreateTradeOrderDto.prototype, "side", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['limit', 'market', 'stop'], example: 'limit' }),
    (0, class_validator_1.IsIn)(['limit', 'market', 'stop']),
    __metadata("design:type", String)
], CreateTradeOrderDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1.5, description: 'Max 2 decimal places' }),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateTradeOrderDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100000, description: 'Max 5 decimal places' }),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 5 }),
    __metadata("design:type", Number)
], CreateTradeOrderDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'BTCUSD', description: 'Trading pair (BTCUSD, EURUSD, ETHUSD)' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], CreateTradeOrderDto.prototype, "pair", void 0);
//# sourceMappingURL=create-trade-order.dto.js.map