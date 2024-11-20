// user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { userProviders } from '../providers/user.providers';
import { DatabaseModule } from '../database/database.module';
import { User } from 'src/entites/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    DatabaseModule,
  ],
  controllers: [UserController],
  providers: [
    UserService,
    ...userProviders,
  ],
  exports: [
    UserService,
    ...userProviders,
  ],
})
export class UsersModule {}
