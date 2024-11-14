import { CommentEntity } from 'src/entites/comment.entity';
import { DataSource } from 'typeorm';

export const commentProviders = [
  {
    provide: 'COMMENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CommentEntity),
    inject: ['DATA_SOURCE'],
  },
];
