// post.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from 'src/dto/create-post.dto';
import { Post } from 'src/entites/post.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  // Crear una nueva publicación
  async create(createPostDto: CreatePostDto): Promise<Post> {
    const post = this.postRepository.create(createPostDto);
    return await this.postRepository.save(post);
  }

  // Obtener todas las publicaciones
  async findAll(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  // Obtener una publicación por ID
  async findOne(id: string): Promise<Post> {
    return await this.postRepository.findOne({
      where: { id }, // Aquí se pasa el ID dentro de un objeto
    });
  }

  // Obtener publicaciones de un usuario
  async findByUserId(userId: string): Promise<Post[]> {
    return await this.postRepository
      .createQueryBuilder('post')
      .where('post.userId = :userId', { userId })
      .getMany();
  }

  // Eliminar una publicación
  async remove(id: string): Promise<void> {
    await this.postRepository.delete(id);
  }
}
