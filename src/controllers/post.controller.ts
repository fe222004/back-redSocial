import { Controller, Post, UseInterceptors, UploadedFile, Body, Get, Param, Put, Delete, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PostEntity } from 'src/entites/post.entity';
import { PostService } from 'src/services/post.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CreatePostDto } from 'src/auth/dto/post.dto';




@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async findPost() {
    const posts = await this.postService.finAll();
    return posts;
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads/posts',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = extname(file.originalname);
        callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      },
    }),
  }))
  async createPost(
    @UploadedFile() file: Express.Multer.File,
    @Body() payload: CreatePostDto,
  ) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    const newPost = await this.postService.create(payload, file.filename);
    return newPost;
  }

}
