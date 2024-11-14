import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración para servir archivos estáticos desde la carpeta 'uploads/stories'
  app.use('/uploads/stories', express.static(join(__dirname, '..', 'uploads', 'stories')));
  app.use('/uploads/posts', express.static(join(__dirname, '..', 'uploads', 'posts')));
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));


  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors(); 
  await app.listen(3000);
}
bootstrap();
