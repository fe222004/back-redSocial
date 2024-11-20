import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
  } from 'typeorm';
  import { User } from './user.entity';
  
  @Entity('stories')
  export class Story {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => User, (user) => user.stories, { onDelete: 'CASCADE' })
    user: User;
  
    @Column('text', { nullable: true })
    imageUrl: string;
  
    @Column('text', { nullable: true })
    videoUrl: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @Column({ default: 24 }) // Duración en horas
    durationInHours: number;
  }
  