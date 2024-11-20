// category.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from 'src/dto/create-category.dto';
import { Category } from 'src/entites/categories.entity';
import { Repository } from 'typeorm';
// Importamos el DTO

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  // Crear una nueva categoría usando el DTO
  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(category);
  }

  // Obtener todas las categorías
  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  // Obtener una categoría por su ID
  async findOne(id: string): Promise<Category> {
    return await this.categoryRepository.findOne({
      where: { id }, // Aquí se pasa el ID dentro de un objeto 'where'
    });
  }

  // Eliminar una categoría
  async remove(id: string): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
