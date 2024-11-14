import { Provider } from '@nestjs/common';
import { ResolverEntity } from 'src/entites/resolver.entity';
import { DataSource } from 'typeorm';

export const resolverProviders: Provider[] = [

  {
    provide: 'RESOLVER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ResolverEntity),
    inject: ['DATA_SOURCE'],
  },
];
