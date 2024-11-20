// category.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // Crear una nueva categoría
  @Post()
  async create(@Body('name') name: string) {
    return this.categoryService.create(name);
  }

  // Obtener todas las categorías
  @Get()
  async findAll() {
    return this.categoryService.findAll();
  }

  // Obtener una categoría por ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  // Eliminar una categoría
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
