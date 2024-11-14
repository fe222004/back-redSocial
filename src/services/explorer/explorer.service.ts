import { Inject, Injectable } from '@nestjs/common';
import { PostEntity } from 'src/entites/post.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class ExplorerService {
    constructor(
        @Inject('POST_REPOSITORY')
        private readonly postRepository: Repository<PostEntity>
        ){}

        async peopleTaste(tag: string[]) {
            const getTags = await this.postRepository.find({
                where: {
                  tag:In(tag), 
                },
              });
              return getTags;
          }
}
