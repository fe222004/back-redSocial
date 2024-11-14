import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength, IsOptional, IsUUID, Length } from 'class-validator';

export class RegisterDto {
  @IsUUID()
  @IsOptional()
  id?: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @Length(1, 40)
  firstname: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @Length(1, 40)
  lastname: string;

  @IsEmail()
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @IsOptional()
  image?: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @Length(0, 200)
  @IsOptional()
  description?: string;

  @IsUUID()
  @IsOptional()
  countryId?: string;

  @IsUUID()
  @IsOptional()
  roleId?: string;
}
