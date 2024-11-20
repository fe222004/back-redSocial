import { Controller, Post, Param, Delete } from '@nestjs/common';
import { LikeService } from './like.service';

@Controller('likes')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Post('post/:postId/user/:userId')
  async likePost(@Param('postId') postId: string, @Param('userId') userId: string) {
    return await this.likeService.create(postId, userId);
  }

  @Delete('post/:postId/user/:userId')
  async removeLike(@Param('postId') postId: string, @Param('userId') userId: string) {
    return await this.likeService.remove(postId, userId);
  }
}
