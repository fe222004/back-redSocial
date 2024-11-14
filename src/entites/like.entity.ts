import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { StoryEntity } from './story.entity';
import { UserEntity } from './user.entity';

@Entity('likes')
export class LikeEntity {
    @PrimaryGeneratedColumn('uuid', { comment: 'Identificador único del like' })
    id: string;

    @ManyToOne(() => StoryEntity, story => story.likes)
    story: StoryEntity;

    @ManyToOne(() => UserEntity)
    user: UserEntity;
}
