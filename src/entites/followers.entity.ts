import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
  } from 'typeorm';
  import { User } from './user.entity';
  
  @Entity('followers')
  export class Follower {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => User, (user) => user.following, { onDelete: 'CASCADE' })
    follower: User;
  
    @ManyToOne(() => User, (user) => user.followers, { onDelete: 'CASCADE' })
    followed: User;
  
    @CreateDateColumn()
    createdAt: Date;
  }
  