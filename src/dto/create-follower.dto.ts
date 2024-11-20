import { IsString } from 'class-validator';

export class CreateFollowerDto {
  @IsString()
  readonly userId: string;  // ID del usuario que sigue

  @IsString()
  readonly followedUserId: string;  // ID del usuario seguido
}