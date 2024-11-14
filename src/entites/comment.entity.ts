import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';
import { PostEntity } from './post.entity';

@Entity('comments')
export class CommentEntity {
    @PrimaryGeneratedColumn('uuid', { comment: 'Identificador único del comentario' })
    id: string;

    @Column({ type: 'text', comment: 'Texto del comentario' })
    comment: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', comment: 'Fecha y hora del comentario' })
    comment_date: Date;

    @ManyToOne(() => UserEntity, user => user.comments)
    user: UserEntity;

    @ManyToOne(() => PostEntity, post => post.comments)
    post: PostEntity;
}
