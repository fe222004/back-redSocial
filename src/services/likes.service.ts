// like.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLikeDto } from 'src/dto/create-like.dto';
import { Like } from 'src/entites/like.entity';
import { Repository } from 'typeorm';


@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(Like)
    private readonly likeRepository: Repository<Like>,
  ) {}

  // Crear un "like" en una publicación
  async create(createLikeDto: CreateLikeDto): Promise<Like> {
    // Asignamos los IDs de Post y User a las relaciones
    const like = this.likeRepository.create({
      post: { id: createLikeDto.postId },  // Relación con Post por ID
      user: { id: createLikeDto.userId },  // Relación con User por ID
    });
  
    return await this.likeRepository.save(like);
  }

  // Obtener todos los "likes" de una publicación
  async findByPostId(postId: string): Promise<Like[]> {
    return await this.likeRepository.find({
      where: {
        post: { id: postId }, // Referencia a la relación "post" y el "id"
      },
    });
  }

  // Eliminar un "like"
  async remove(id: string): Promise<void> {
    await this.likeRepository.delete(id);
  }
}
