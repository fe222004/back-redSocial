import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
  } from 'typeorm';
  import { User } from './user.entity';
  
  @Entity('messages')
  export class Message {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => User, (user) => user.sentMessages, { onDelete: 'CASCADE' })
    sender: User;
  
    @ManyToOne(() => User, (user) => user.receivedMessages, { onDelete: 'CASCADE' })
    receiver: User;
  
    @Column('text')
    content: string;
  
    @CreateDateColumn()
    sentAt: Date;
  }
  