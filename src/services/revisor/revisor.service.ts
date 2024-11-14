import { Inject, Injectable } from '@nestjs/common';
import { StateRevisorEntity } from 'src/entites/stateRevisor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RevisorService {
    constructor(
        @Inject('STATEREVISOR_REPOSITORY')
        private readonly revisorRepository: Repository<StateRevisorEntity>
        ){}
      
        async getAll() {
          const complaint = await this.revisorRepository.find();
          return complaint;
        }
        async createForm(payload: any) {
          console.log(payload)
          const newStateRevisor =this.revisorRepository.create();
         newStateRevisor.name_offender = payload.name_offender;
          newStateRevisor.problem = payload.problem;
          newStateRevisor.problem_date = payload. date_complaint;
          newStateRevisor.problem_hour = payload.problem_hour;
          newStateRevisor.severity= payload.severity;
          
      
           await  this.revisorRepository.save(newStateRevisor);  
      }
}
