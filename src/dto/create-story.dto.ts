import { IsString, IsOptional } from 'class-validator';

export class CreateStoryDto {
  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsOptional()
  video: string;
}
