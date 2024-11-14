import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { RoleEntity } from './role.entity';
import { StoryEntity } from './story.entity';
import { StateRevisorEntity } from './stateRevisor.entity';
import { ResolverEntity } from './resolver.entity';
import { PostEntity } from './post.entity';
import { CommentEntity } from './comment.entity';
import { CountryEntity } from './country.entity';
import { FriendshipEntity } from './friendship.entity';

@Entity('users')
export class UserEntity {
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
  image: string;

  @Column({ type: 'varchar', length: 200, nullable: true, comment: 'Descripción breve sobre el usuario' })
  description: string;

  @ManyToOne(() => CountryEntity, country => country.users)
  country: CountryEntity;

  @ManyToOne(() => RoleEntity, role => role.users)
  role: RoleEntity;

  @OneToMany(() => StoryEntity, story => story.user)
  stories: StoryEntity[];

  @OneToMany(() => StateRevisorEntity, stateRevisor => stateRevisor.user)
  stateRevisors: StateRevisorEntity[];

  @OneToMany(() => ResolverEntity, resolver => resolver.user)
  resolvers: ResolverEntity[];

  @OneToMany(() => PostEntity, post => post.user)
  posts: PostEntity[];

  @OneToMany(() => CommentEntity, comment => comment.user)
  comments: CommentEntity[];

  @ManyToMany(() => UserEntity, user => user.friends)
  @JoinTable({
    name: 'friendships',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'friend_id', referencedColumnName: 'id' }
  })
  friends: UserEntity[];
}
