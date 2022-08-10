import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos')
export default class ProdutosController {

    @Get()
    obterTodos(): string{
        return 'Lista todos os produtos'; 
    };

    @Get(':id')
    obterProdutoEspecifico(@Param('id') id: number | string): string {
        return `Produto específico: ${id}`;
    }

    @Post()
    criarProduto(@Body() produto): string {
        return `Produto Criado: ${JSON.stringify(produto)}`; 
    }

    @Put(':id')
    atualizarProduto(@Body() produto, @Param('id') id: number | string): string {
        return `Produto ${id} atualizado ${JSON.stringify(produto)}`; 
    }

    @Delete(':id')
    apagarProduto(@Param('id') id: number | string): string {
        return `Produto ${id} apagado`; 
    }
}