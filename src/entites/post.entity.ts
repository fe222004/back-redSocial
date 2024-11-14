import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { UserEntity } from './user.entity';
import { CommentEntity } from './comment.entity';

@Entity('posts')
export class PostEntity {
    @PrimaryGeneratedColumn('uuid', { comment: 'Identificador único de la publicación' })
    id: string;

    @Column({ type: 'text', comment: 'Texto de la publicación' })
    text: string;

    @Column({ type: 'varchar', nullable: true, comment: 'Imagen opcional de la publicación' })
    image: string;

    @Column({ type: 'varchar', comment: 'Etiqueta de la publicación' })
    tag: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', comment: 'Fecha de creación de la historia' })
    created_at: Date;

    @ManyToOne(() => UserEntity, user => user.posts)
    user: UserEntity;

    @OneToMany(() => CommentEntity, comment => comment.post)
    comments: CommentEntity[];
}
