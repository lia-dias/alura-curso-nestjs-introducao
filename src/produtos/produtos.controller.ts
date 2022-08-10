import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { of } from "rxjs";
import Produto from './produto.model';

@Controller('produtos')
export default class ProdutosController {

    private produtosDB: Produto[] = [
        new Produto("LV1", "Algoritmos: Teoria e Prática", 220.00),
        new Produto("LV2", "Arquitetura de Software", 69.90),
        new Produto("LV3", "Problemas da Ciência da Computação em Python", 59.90),
    ];

    @Get()
    obterTodos(): Produto[]{
        return this.produtosDB.map((produto, index) => (!!produto ? {id: index, ...produto}: null)).filter( produto => !!produto); 
    };

    @Get(':id')
    obterProdutoEspecifico(@Param('id') id: number): Produto {
        return {id, ...this.produtosDB[id]};
    }

    @Post()
    criarProduto(@Body() produto: Produto): Produto {
        const id = this.produtosDB.push(produto)-1;
        return {id, ...this.produtosDB[id]}; 
    }

    @Put(':id')
    atualizarProduto(@Body() produto, @Param('id') id: number): Produto{
        this.produtosDB[id] = produto;
        return {id, ...this.produtosDB[id]};
    }

    @Delete(':id')
    apagarProduto(@Param('id') id: number): Produto {
        const produto = this.produtosDB[id];
        this.produtosDB[id] = null;
        return produto;
    }
}