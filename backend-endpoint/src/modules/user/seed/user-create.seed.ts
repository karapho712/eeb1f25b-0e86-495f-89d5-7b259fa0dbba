import { Factory, Seeder } from 'typeorm-seeding';
import { User } from 'src/modules/user/entities/user.entity';
import { Position } from 'src/types';

export class UserCreateSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(User)().create({
      email: 'hijabalief@gmail.com',
      firstName: 'hijab',
      lastName: 'alief',
      phone: '0814547641',
      position: Position.Controller,
    });

    await factory(User)().createMany(117);
  }
}
