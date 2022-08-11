import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import LivroService from './livros/livro.provider';
import LivrosController from './livros/livros.controller';

@Module({
  imports: [],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivroService],
})
export class AppModule {}
