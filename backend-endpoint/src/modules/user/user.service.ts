import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Order } from 'src/types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findEmail(email: string) {
    return this.userRepository.findOne({
      where: {
        email: email,
      },
    });
  }

  async create(createUserDto: CreateUserDto) {
    const userEmail = await this.findEmail(createUserDto.email);

    if (userEmail) throw new ConflictException('Email already taken');

    const newUser = await this.userRepository.save(
      this.userRepository.create({
        ...createUserDto,
      }),
    );

    return newUser;
  }

  findAll(order: Order<User>) {
    return this.userRepository.find({
      order: order,
    });
  }

  findOne(userId: number) {
    return this.userRepository.findOneByOrFail({ id: userId }).catch(() => {
      throw new NotFoundException('User not found');
    });
  }

  async update(userId: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.email) {
      const checkUser = await this.findEmail(updateUserDto.email);
      if (checkUser && checkUser.id !== userId)
        throw new ConflictException('Email Already in Use');
    }

    const user = await this.findOne(userId);

    return this.userRepository.save(
      this.userRepository.create({
        ...user,
        ...updateUserDto,
      }),
    );
  }

  async remove(id: number) {
    const user = await this.userRepository
      .findOneOrFail({
        where: {
          id: id,
        },
      })
      .catch(() => {
        throw new NotFoundException('User not found');
      });

    await this.userRepository.delete(user);

    return user;
  }
}
