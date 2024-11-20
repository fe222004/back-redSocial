import { Like } from 'src/entites/like.entity';
import { DataSource } from 'typeorm';

export const likeProviders = [
  {
    provide: 'LIKE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Like),
    inject: ['DATA_SOURCE'],
  },
];
