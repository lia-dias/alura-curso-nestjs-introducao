import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import Produto from './produto.model';
import ProdutoService from "./produto.provider";

@Controller('produtos')
export default class ProdutosController {

    constructor(private produtoService: ProdutoService){}

    @Get()
    obterTodos(): Produto[]{
        return this.produtoService.obterTodos();
    }

    @Get(':id')
    obterProdutoEspecifico(@Param('id') id: number): Produto {
        return this.produtoService.obterProdutoEspecifico(id);
    }

    @Post()
    criarProduto(@Body() produto: Produto): Produto {
        return this.produtoService.criarProduto(produto);
    }

    @Put(':id')
    atualizarProduto(@Body() produto, @Param('id') id: number): Produto{
        return this.produtoService.atualizarProduto(produto, id);
    }

    @Delete(':id')
    apagarProduto(@Param('id') id: number): Produto {
        return this.produtoService.apagarProduto(id);
    }
}