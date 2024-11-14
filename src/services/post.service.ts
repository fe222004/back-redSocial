import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from 'src/auth/dto/post.dto';
import { PostEntity } from 'src/entites/post.entity';
import { UserEntity } from 'src/entites/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<UserEntity>,
    @Inject('POST_REPOSITORY')
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async finAll() {
    const posts = await this.postRepository.find({
      relations: ['user'],
      order: { created_at: 'DESC' },
    }); 
    return posts;
  }

  async create(createPostDto: CreatePostDto, imageFilename: string): Promise<PostEntity> {
    const { text, tag, userId } = createPostDto;

    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }

    const newPost = new PostEntity();
    newPost.text = text;
    newPost.tag = tag;
    newPost.image = imageFilename;
    newPost.user = user;

    const savedPost = await this.postRepository.save(newPost);

    return savedPost;
  }
}
