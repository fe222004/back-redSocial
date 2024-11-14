import { Inject, Injectable } from '@nestjs/common';
import { CountryEntity } from 'src/entites/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {
  constructor(
    @Inject('COUNTRY_REPOSITORY')
    private readonly countryRepository: Repository<CountryEntity>,
  ) {}

  async finAll() {
    const country = await this.countryRepository.find();
    return country;
  }
}
