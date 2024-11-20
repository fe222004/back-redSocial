import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  senderId: string;  // ID del usuario que envía el mensaje

  @IsNotEmpty()
  receiverId: string;  // ID del usuario receptor
}
