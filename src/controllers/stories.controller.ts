import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { StoryService } from './story.service';
import { CreateStoryDto } from './dto/create-story.dto';

@Controller('stories')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Post()
  async create(@Body() createStoryDto: CreateStoryDto) {
    return await this.storyService.create(createStoryDto);
  }

  @Get(':userId')
  async findByUser(@Param('userId') userId: string) {
    return await this.storyService.findByUser(userId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.storyService.remove(id);
  }
}
