import { User } from 'src/modules/user/entities/user.entity';
import { Position } from 'src/types';
import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto extends PartialType(User) {
  @ApiProperty({ required: true, example: 'Hijab' })
  @IsString()
  firstName: string;

  @ApiProperty({ required: true, example: 'Alief' })
  @IsString()
  lastName: string;

  @ApiProperty({ required: true, enum: Position, example: 'CEO' })
  @IsEnum(Position)
  position: Position;

  @ApiProperty({ required: true, example: '082168545' })
  @IsString()
  phone: string;

  @ApiProperty({ required: true, example: 'abcdefgh@gmail.com' })
  @IsEmail()
  email: string;
}
