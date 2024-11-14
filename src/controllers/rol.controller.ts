import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RolService } from "src/services/rol/rol.service";

@Controller('rol')
export class RolController{
    
    constructor(private readonly rolService: RolService){

    }
  
    @Get()
    async findrol(){
      const response = await this.rolService.finAll()
      return response;
    }
     
}