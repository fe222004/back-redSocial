// follower.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFollowerDto } from 'src/dto/create-follower.dto';
import { Follower } from 'src/entites/followers.entity';
import { Repository } from 'typeorm';


@Injectable()
export class FollowerService {
  constructor(
    @InjectRepository(Follower)
    private readonly followerRepository: Repository<Follower>,
  ) {}

  // Crear una nueva relación de seguimiento
  async create(createFollowerDto: CreateFollowerDto): Promise<Follower> {
    const follower = this.followerRepository.create(createFollowerDto);
    return await this.followerRepository.save(follower);
  }

  // Obtener los seguidores de un usuario
  async findFollowers(userId: string): Promise<Follower[]> {
    return await this.followerRepository.find({ where: { followedId: userId } });
  }

  // Obtener los usuarios que un usuario está siguiendo
  async findFollowing(userId: string): Promise<Follower[]> {
    return await this.followerRepository.find({ where: { followerId: userId } });
  }

  // Eliminar una relación de seguimiento
  async remove(id: string): Promise<void> {
    await this.followerRepository.delete(id);
  }
}
