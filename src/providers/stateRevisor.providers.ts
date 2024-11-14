import { StateRevisorEntity } from 'src/entites/stateRevisor.entity';
import { DataSource } from 'typeorm';

export const stateRevisorProviders = [
  {
    provide: 'STATEREVISOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(StateRevisorEntity),
    inject: ['DATA_SOURCE'],
  },
];
