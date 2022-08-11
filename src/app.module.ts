import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ProdutoService from './produtos/produto.provider';
import ProdutosController from './produtos/produtos.controller';

@Module({
  imports: [],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutoService],
})
export class AppModule {}
