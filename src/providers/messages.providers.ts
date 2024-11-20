import { Message } from 'src/entites/messages.entity';
import { DataSource } from 'typeorm';

export const MessageProviders = [
  {
    provide: 'POST_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Message),
    inject: ['DATA_SOURCE'],
  },
];
