import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('friendships')
export class FriendshipEntity {
    @PrimaryGeneratedColumn('uuid', { comment: 'Identificador único de la amistad' })
    id: string;

    @ManyToOne(() => UserEntity, user => user.friends)
    user: UserEntity;

    @ManyToOne(() => UserEntity)
    friend: UserEntity;
}
