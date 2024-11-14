import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ResolverService } from 'src/services/resolver.service';

@Controller('resolvers')
export class ResolverController {
  constructor(private readonly resolverService: ResolverService) {}

  @Get()
  async findResolver() {
    const response = await this.resolverService.finAll();
    return response;
  }

  @Get(':id')
  async findOneResolver(@Param('id') id: string) {
    const response = await this.resolverService.find(id);
    return response;
  }

  @Post()
  async createResolver(@Body() payload: any) {
    const response = await this.resolverService.create(payload);
    return response;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() payload: any) {
    return this.resolverService.update(id, payload);
  }
}
