import { Inject, Injectable } from '@nestjs/common';
import { RoleEntity } from 'src/entites/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolService {
    constructor(
        @Inject('ROLE_REPOSITORY')
    private readonly rolRepository: Repository<RoleEntity>,
      ) {}
    
      async finAll() {
        const rol = await this.rolRepository.find();
        return rol;
      }
}
