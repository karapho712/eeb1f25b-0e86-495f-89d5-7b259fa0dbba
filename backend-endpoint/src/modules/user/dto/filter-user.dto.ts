import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { SortOrder } from 'src/types';

export class FilterUserDto {
  @ApiProperty({ required: false, example: SortOrder.ASC })
  @IsOptional()
  @IsEnum(SortOrder)
  email?: SortOrder;

  @ApiProperty({ required: false, example: SortOrder.ASC })
  @IsOptional()
  @IsEnum(SortOrder)
  firstName?: SortOrder;

  @ApiProperty({ required: false, example: SortOrder.ASC })
  @IsOptional()
  @IsEnum(SortOrder)
  lastName?: SortOrder;

  @ApiProperty({ required: false, example: SortOrder.ASC })
  @IsOptional()
  @IsEnum(SortOrder)
  position?: SortOrder;
}
