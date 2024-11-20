import { Follower } from 'src/entites/followers.entity';
import { DataSource } from 'typeorm';

export const followerProviders = [
  {
    provide: 'FRIENDSHIP_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Follower),
    inject: ['DATA_SOURCE'],
  },
];
