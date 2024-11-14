import { LikeEntity } from 'src/entites/like.entity';
import { DataSource } from 'typeorm';

export const likeProviders = [
  {
    provide: 'LIKE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(LikeEntity),
    inject: ['DATA_SOURCE'],
  },
];
