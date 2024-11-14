import { Controller, Get, Query } from '@nestjs/common';
import { ExplorerService } from 'src/services/explorer/explorer.service';

@Controller('explorer')
export class ExplorerController { 
constructor(private readonly explorerService: ExplorerService) {}
 
@Get()
async getPublicationsByTags(@Query('tags') tags: string){
  const tagsArray = tags.split(','); 

  const publications = await this.explorerService.peopleTaste(tagsArray);
  
  return publications;
}
}
