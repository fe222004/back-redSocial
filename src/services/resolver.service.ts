
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ResolverEntity } from 'src/entites/resolver.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResolverService {
  constructor(@Inject('RESOLVER_REPOSITORY') private readonly resolverRepository: Repository<ResolverEntity>
  ) { }

  async finAll() {
    const resolver = await this.resolverRepository.find();
    return resolver;
  }

  async find(id: string) {
    const resolver = await this.resolverRepository.findOne({ where: { id } });
    return resolver;
  }

  create(payload: any) {
    console.log("Trae", payload)
    const resolver = this.resolverRepository.create();
    resolver.name = payload.name;
    resolver.last_name = payload.lastname;
    resolver.email = payload.email;
    resolver.solution = payload.solution;
    resolver.date = payload.date;
    resolver.complaint_number = payload.complaint_number;
    resolver.suspended_account = payload.suspended_account;
    resolver.status = payload.status;
    resolver.responsible = payload.responsible;

    return this.resolverRepository.save(resolver);
  }

  async update(id: string, payload: any) {
    console.log("Actualiza", payload);
    const resolver = await this.resolverRepository.findOne({ where: { id } });
    if (!resolver) {
      throw new BadRequestException('Resolver not found');
    }
    resolver.suspended_account = payload.suspended_account;
    resolver.status = payload.status;

    return this.resolverRepository.save(resolver);
  }
}
