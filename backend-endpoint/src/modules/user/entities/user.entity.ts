import { Position } from 'src/types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  position: Position;

  @Column()
  phone: string; // Can insert like 021, 081, 0411

  @Column({ unique: true })
  email: string;
}
