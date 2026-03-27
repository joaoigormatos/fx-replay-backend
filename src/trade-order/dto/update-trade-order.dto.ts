import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsIn,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateTradeOrderDto {
  @ApiPropertyOptional({ enum: ['buy', 'sell'] })
  @IsOptional()
  @IsIn(['buy', 'sell'])
  side?: 'buy' | 'sell';

  @ApiPropertyOptional({ enum: ['limit', 'market', 'stop'] })
  @IsOptional()
  @IsIn(['limit', 'market', 'stop'])
  type?: 'limit' | 'market' | 'stop';

  @ApiPropertyOptional({ example: 2.5 })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  amount?: number;

  @ApiPropertyOptional({ example: 100000 })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 5 })
  price?: number;

  @ApiPropertyOptional({ example: 'BTCUSD' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  pair?: string;

  @ApiPropertyOptional({ enum: ['open', 'cancelled', 'executed'] })
  @IsOptional()
  @IsIn(['open', 'cancelled', 'executed'])
  status?: 'open' | 'cancelled' | 'executed';
}
