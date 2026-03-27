import { ApiProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateTradeOrderDto {
  @ApiProperty({ enum: ['buy', 'sell'], example: 'buy' })
  @IsIn(['buy', 'sell'])
  side: 'buy' | 'sell';

  @ApiProperty({ enum: ['limit', 'market', 'stop'], example: 'limit' })
  @IsIn(['limit', 'market', 'stop'])
  type: 'limit' | 'market' | 'stop';

  @ApiProperty({ example: 1.5, description: 'Max 2 decimal places' })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  amount: number;

  @ApiProperty({ example: 100000, description: 'Max 5 decimal places' })
  @IsNumber({ maxDecimalPlaces: 5 })
  price: number;

  @ApiProperty({ example: 'BTCUSD', description: 'Trading pair (BTCUSD, EURUSD, ETHUSD)' })
  @IsString()
  @MaxLength(10)
  pair: string;
}
