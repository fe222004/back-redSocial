import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from './user.entity';

import { Comment } from './comment.entity';
import { Category } from './categories.entity';
import { Like } from './like.entity';


@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
  user: User;  // Relación con User (un post es creado por un solo usuario)

  @Column('text')
  description: string;

  @Column({ nullable: true })
  imageUrl: string;

  @ManyToOne(() => Category, (category) => category.posts)
  category: Category;  // Relación con Category (un post pertenece a una categoría)

  @OneToMany(() => Like, (like) => like.post)  // Relación con los likes (un post puede tener muchos likes)
  likes: Like[];

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Comment, (comment) => comment.post)  // Relación con los comentarios (un post puede tener muchos comentarios)
  comments: Comment[];
}
