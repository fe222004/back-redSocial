import { Inject, Injectable } from '@nestjs/common';
import { CountryEntity } from 'src/entites/country.entity';
import { RoleEntity } from 'src/entites/role.entity';
import { UserEntity } from 'src/entites/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<UserEntity>,
    @Inject('COUNTRY_REPOSITORY')
    private readonly countryRepository: Repository<CountryEntity>,
    @Inject('ROLE_REPOSITORY')
    private readonly roleRepository: Repository<RoleEntity>,
  ) {}

  async findAll() {
    return await this.userRepository.find({ relations: ['country', 'role'] });
  }

  async findOneById(id: string) {
    return await this.userRepository.findOne({ where: { id }, relations: ['country', 'role'] });
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    return await this.userRepository.findOne({
      where: { email },
      relations: ['role'],
    });
  }

  async findByEmailWithPassword(email: string): Promise<UserEntity> {
    return await this.userRepository.findOne({
      where: { email },
      select: ['id', 'email', 'password', 'role'],
      relations: ['role'],
    });
  }

  async create(payload: any) {
    console.log('Payload to create:', payload);
    
    if (payload.countryId) {
      payload.country = await this.countryRepository.findOne({ where: { id: payload.countryId } });
    }

    if (payload.rolId) {
      payload.role = await this.roleRepository.findOne({ where: { id: payload.rolId } });
    }

    const user = this.userRepository.create(payload);
    return await this.userRepository.save(user);
  }

  async update(id: string, payload: any) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (user) {
      if (payload.countryId) {
        payload.country = await this.countryRepository.findOne({ where: { id: payload.countryId } });
      }

      if (payload.roleId) {
        payload.role = await this.roleRepository.findOne({ where: { id: payload.roleId } });
      }

      Object.assign(user, payload);
      return await this.userRepository.save(user);
    }
    return null;
  }

  async delete(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (user) {
      await this.userRepository.delete(id);
      return true;
    }
    return false;
  }
}
