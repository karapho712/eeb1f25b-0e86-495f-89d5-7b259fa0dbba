import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional } from 'class-validator';
import { Position } from 'src/types';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ required: false, example: 'Wahid' })
  @IsOptional()
  firstName: string;

  @ApiProperty({ required: false, example: 'Majid' })
  @IsOptional()
  lastName: string;

  @ApiProperty({ required: false, example: Position.HRManager })
  @IsOptional()
  position: Position;

  @ApiProperty({ required: false, example: '08412544' })
  @IsOptional()
  phone: string;

  @ApiProperty({ required: false, example: 'emailemail@gmail.com' })
  @IsOptional()
  email: string;
}
