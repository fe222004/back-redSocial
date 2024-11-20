import { Inject, Injectable } from '@nestjs/common';
import { StoryEntity } from 'src/entites/stories.entity';
import { UserEntity } from 'src/entites/user.entity';
import { Repository, In } from 'typeorm';

@Injectable()
export class StoryService {
  constructor(
    @Inject('STORY_REPOSITORY')
    private readonly storyRepository: Repository<StoryEntity>,
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll() {
    return await this.storyRepository.find({ relations: ['user'] });
  }

  async findOne(id: string) {
    return await this.storyRepository.findOne({ where: { id }, relations: ['user'] });
  }

  async findStoriesForUserAndFriends(userId: string) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['friends'],
    });
  
    if (!user || !user.friends) {
      // Si el usuario no existe o no tiene amigos, retornar un array vacío
      return [];
    }
  
    const friendIds = user.friends.map(friend => friend.id);
    return this.storyRepository.find({
      where: {
        user: {
          id: In(friendIds),
        },
      },
      relations: ['user'],
      order: {
        created_at: 'DESC', // Ordenar por fecha de creación descendente
      },
    });
  }

  async create(imageFilename: string, userId: string) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const story = this.storyRepository.create({ image: imageFilename, user });
    const newStory = await this.storyRepository.save(story);

    // Obtener las historias de los amigos y agregar la nueva historia al principio
    const stories = await this.findStoriesForUserAndFriends(userId);
    return [newStory, ...stories];
  }

  async update(id: string, imageFilename: string) {
    const story = await this.storyRepository.findOne({ where: { id } });
    if (story) {
      story.image = imageFilename;
      return await this.storyRepository.save(story);
    }
    return null;
  }
}
