import {
  rand,
  randEmail,
  randFirstName,
  randLastName,
  randPhoneNumber,
} from '@ngneat/falso';
import { define } from 'typeorm-seeding';
import { User } from 'src/modules/user/entities/user.entity';
import { Position } from 'src/types';
import { values } from 'lodash';

define(User, () => {
  const user = new User();

  user.email = randEmail();
  user.firstName = randFirstName();
  user.lastName = randLastName();
  user.phone = randPhoneNumber({});
  user.position = rand(values(Position));

  return user;
});
