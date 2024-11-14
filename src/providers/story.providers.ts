import { StoryEntity } from 'src/entites/story.entity';
import { DataSource } from 'typeorm';

export const storyProviders = [
  {
    provide: 'STORY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(StoryEntity),
    inject: ['DATA_SOURCE'],
  },
];


