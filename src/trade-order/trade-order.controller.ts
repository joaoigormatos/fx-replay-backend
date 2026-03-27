import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TradeOrderService } from './trade-order.service.js';
import { CreateTradeOrderDto } from './dto/create-trade-order.dto.js';
import { UpdateTradeOrderDto } from './dto/update-trade-order.dto.js';

@ApiTags('Trade Orders')
@Controller('trade_orders')
export class TradeOrderController {
  constructor(private readonly tradeOrderService: TradeOrderService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new trade order' })
  @ApiResponse({ status: 201, description: 'Order created successfully' })
  @ApiResponse({ status: 400, description: 'Validation error' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() dto: CreateTradeOrderDto) {
    return this.tradeOrderService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List all trade orders (paginated)' })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'offset', required: false, type: Number, example: 10 })
  @ApiResponse({ status: 200, description: 'Paginated list of orders' })
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('offset', new DefaultValuePipe(10), ParseIntPipe) offset: number,
  ) {
    return this.tradeOrderService.findAll(page, offset);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single trade order by ID' })
  @ApiParam({ name: 'id', type: String, description: 'UUID of the trade order' })
  @ApiResponse({ status: 200, description: 'The trade order' })
  @ApiResponse({ status: 404, description: 'Order not found' })
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.tradeOrderService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing trade order' })
  @ApiParam({ name: 'id', type: String, description: 'UUID of the trade order' })
  @ApiResponse({ status: 200, description: 'Order updated successfully' })
  @ApiResponse({ status: 400, description: 'Validation error' })
  @ApiResponse({ status: 404, description: 'Order not found' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateTradeOrderDto,
  ) {
    return this.tradeOrderService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Soft delete a trade order' })
  @ApiParam({ name: 'id', type: String, description: 'UUID of the trade order' })
  @ApiResponse({ status: 204, description: 'Order deleted successfully' })
  @ApiResponse({ status: 404, description: 'Order not found' })
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    await this.tradeOrderService.softDelete(id);
  }
}
