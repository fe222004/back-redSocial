import { Controller, Post, Delete, Param } from '@nestjs/common';
import { FollowerService } from './follower.service';

@Controller('followers')
export class FollowerController {
  constructor(private readonly followerService: FollowerService) {}

  @Post('follow/:userId/:followId')
  async follow(@Param('userId') userId: string, @Param('followId') followId: string) {
    return await this.followerService.follow(userId, followId);
  }

  @Delete('unfollow/:userId/:followId')
  async unfollow(@Param('userId') userId: string, @Param('followId') followId: string) {
    return await this.followerService.unfollow(userId, followId);
  }
}
