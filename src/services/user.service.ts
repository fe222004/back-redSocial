// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/entites/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Crear un nuevo usuario
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  // Obtener un usuario por su ID
  async findOneById(id: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { id }, // Aquí estás pasando el ID de forma correcta
    });
  }

  // Obtener todos los usuarios
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // Eliminar un usuario
  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
