import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove qualquer propriedade não declarada no DTO.
    forbidNonWhitelisted: true, // Lança um erro se uma propriedade não declarada for encontrada.
  }))
  await app.listen(3000);
}
bootstrap();