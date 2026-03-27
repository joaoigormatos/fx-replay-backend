"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopOrderHandler = void 0;
const common_1 = require("@nestjs/common");
const market_prices_js_1 = require("../market-prices.js");
class StopOrderHandler {
    validate({ side, price, pair }) {
        const marketPrice = market_prices_js_1.MARKET_PRICES[pair];
        if (side === 'buy' && price <= marketPrice) {
            throw new common_1.BadRequestException(`Buy stop order price must be higher than market price (${marketPrice})`);
        }
        if (side === 'sell' && price >= marketPrice) {
            throw new common_1.BadRequestException(`Sell stop order price must be lower than market price (${marketPrice})`);
        }
    }
}
exports.StopOrderHandler = StopOrderHandler;
//# sourceMappingURL=stop-order.handler.js.map