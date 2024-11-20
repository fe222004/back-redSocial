import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { User } from './user.entity';
  import { Post } from './post.entity';
  
  @Entity('likes')
  export class Like {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => Post, (post) => post.likes)
    @JoinColumn()
    post: Post;
  
    @ManyToOne(() => User, (user) => user.likes)
    @JoinColumn()
    user: User;
  
    @CreateDateColumn()
    createdAt: Date;
  }
  