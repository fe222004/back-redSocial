import { Body, Controller, Get, Post } from '@nestjs/common';
import { RevisorService } from 'src/services/revisor/revisor.service';

@Controller('revisor')
export class StateRevisorController {
 constructor(private readonly revisorService: RevisorService) {}
 
 @Get()
 async findProblem() {
    const getResponse = await this.revisorService.getAll();
    return getResponse;
  }
  
 @Post()
 async createRevisor(@Body()payload: any){
 const postResponse = await this.revisorService.createForm(payload);
 return postResponse
 }
}

