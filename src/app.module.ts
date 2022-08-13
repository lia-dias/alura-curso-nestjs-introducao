import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Livro from './livros/livro.model';
import LivroService from './livros/livro.provider';
import LivrosController from './livros/livros.controller';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'alura_livraria',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([ Livro ])
  ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivroService],
})
export class AppModule {}
