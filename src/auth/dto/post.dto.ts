// create-post.dto.ts

import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsString()
  tag: string;

  image?: string; // La imagen es opcional

  @IsNotEmpty()
  userId: string; // ID del usuario que crea el post
}
