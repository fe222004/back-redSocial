import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CountryService } from "src/services/country/country.service";

@Controller('country')
export class CountryController{
    
    constructor(private readonly countryService: CountryService){

    }
  
    @Get()
    async findcountry(){
      const response = await this.countryService.finAll()
      return response;
    }
     
}