import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Create User' })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Get users' })
  @Get()
  findAll(@Query() filter: FilterUserDto) {
    return this.userService.findAll(filter);
  }

  @ApiOperation({ summary: 'Get an user' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @ApiOperation({ summary: 'Update an user' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @ApiOperation({ summary: 'delete an user' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
