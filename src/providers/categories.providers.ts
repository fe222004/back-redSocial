import { Category } from 'src/entites/categories.entity';
import { DataSource } from 'typeorm';

export const categoryProviders = [
  {
    provide: 'COUNTRY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Category),
    inject: ['DATA_SOURCE'],
  },
];
