import { RoleEntity } from 'src/entites/role.entity';
import { DataSource } from 'typeorm';

export const roleProviders = [
  {
    provide: 'ROLE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(RoleEntity),
    inject: ['DATA_SOURCE'],
  },
];
