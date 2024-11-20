import { Story } from 'src/entites/stories.entity';
import { DataSource } from 'typeorm';

export const storyProviders = [
  {
    provide: 'STORY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Story),
    inject: ['DATA_SOURCE'],
  },
];


