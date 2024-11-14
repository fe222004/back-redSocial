import { Controller, Get, Param, Post, Put, UseInterceptors, UploadedFile, Body, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { StoryService } from 'src/services/story.service';

@Controller('stories')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Get()
  async findStories() {
    return this.storyService.findAll();
  }

  @Get(':id')
  async findOneStory(@Param('id') id: string) {
    return this.storyService.findOne(id);
  }

  @Get('user/:userId/friends')
  async findStoriesForUserAndFriends(@Param('userId') userId: string) {
    return this.storyService.findStoriesForUserAndFriends(userId);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads/stories',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = extname(file.originalname);
        callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      },
    }),
  }))
  async createStory(
    @UploadedFile() file: Express.Multer.File,
    @Body('userId') userId: string,
  ) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    const stories = await this.storyService.create(file.filename, userId);
    return stories;
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads/stories',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = extname(file.originalname);
        callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      },
    }),
  }))
  async updateStory(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    const updatedStory = await this.storyService.update(id, file.filename);
    return updatedStory;
  }
}
