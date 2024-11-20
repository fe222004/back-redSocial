import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { Category } from 'src/entites/categories.entity';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  category: Category;  // Puede ser una categoría con ID
}
