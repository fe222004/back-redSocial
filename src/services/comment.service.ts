// comment.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommentDto } from 'src/dto/create-comment.dto';
import { Repository } from 'typeorm';


@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  // Crear un nuevo comentario
  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment = this.commentRepository.create(createCommentDto);
    return await this.commentRepository.save(comment);
  }

  // Obtener todos los comentarios de una publicación
  async findByPostId(postId: string): Promise<Comment[]> {
    return await this.commentRepository.find({ where: { postId } });
  }

  // Eliminar un comentario
  async remove(id: string): Promise<void> {
    await this.commentRepository.delete(id);
  }
}
