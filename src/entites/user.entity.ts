import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Post } from './post.entity';
import { Follower } from './followers.entity';
import { Like } from './like.entity';
import { Message } from './messages.entity';
import { Story } from './stories.entity';
import { Comment } from './comment.entity';


@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 40, comment: 'Primer nombre del usuario' })
  firstname: string;

  @Column({ type: 'varchar', length: 40, comment: 'Apellido del usuario' })
  lastname: string;

  @Column({ type: 'varchar', unique: true, comment: 'Correo electrónico del usuario' })
  email: string;

  @Column({ type: 'varchar', comment: 'Contraseña del usuario' })
  password: string;

  @Column({ type: 'varchar', nullable: true, comment: 'Imagen de perfil del usuario' })
  avatar: string;

  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn()
  updatedAt: Date;

    // Relations
    @OneToMany(() => Post, (post) => post.user)
    posts: Post[]; 
  
    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[]; 
  
    @OneToMany(() => Follower, (follower) => follower.follower)
    following: Follower[];
  
    @OneToMany(() => Follower, (follower) => follower.followed)
    followers: Follower[];
  
    @OneToMany(() => Like, (like) => like.user)
    likes: Like[];

    @OneToMany(() => Story, (story) => story.user)
    stories: Story[];
  
    @OneToMany(() => Message, (message) => message.sender)
    sentMessages: Message[];
  
    @OneToMany(() => Message, (message) => message.receiver)
    receivedMessages: Message[];
}
