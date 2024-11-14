import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { UserService } from '../services/user.service'; // Unificado el uso de UserService para crear usuarios
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService
  ) {}

  // Registro de usuarios usando UserService
  async register({firstname, lastname, email, password, image, description, countryId, roleId }: RegisterDto) {
    const user = await this.userService.findOneById(email);

    if (user) {
      throw new BadRequestException('User already exists');
    }

    await this.userService.create({
      firstname,
      lastname,
      email,
      password: await bcryptjs.hash(password, 10),
      image,
      description,
      countryId,
      roleId,
    });

    return {
      firstname,
      email,
    };
  }

  async login({ email, password }: LoginDto) {
    const user = await this.userService.findByEmailWithPassword(email);
    if (!user) {
      throw new UnauthorizedException('email is wrong');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('password is wrong');
    }

    if (!user.role) {
      throw new UnauthorizedException('User role not found');
    }

    const payload = { email: user.email, role: user.role.name }; 
    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      email,
      role: user.role.name,
      userId: user.id,
    };
  }

  async profile({ email, role }: { email: string; role: string }) {
    return await this.userService.findOneByEmail(email);
  }
}
