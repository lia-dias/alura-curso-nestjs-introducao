import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import Livro from './livro.model';
import LivroService from "./livro.provider";

@Controller('livros')
export default class LivrosController {

    constructor(private livroService: LivroService){}

    @Get()
    obterTodos(): Promise<Livro[]>{
        return this.livroService.obterTodos();
    }

    @Get(':id')
    obterLivroEspecifico(@Param('id') id: number): Promise<Livro> {
        return this.livroService.obterLivroEspecifico(id);
    }

    @Post()
    criarLivro(@Body() livro: Livro): Promise<Livro> {
        return this.livroService.criarLivro(livro);
    }

    @Put(':id')
    atualizarLivro(@Body() livro, @Param('id') id: number): Promise<Livro>{
        return this.livroService.atualizarLivro(livro, id);
    }

    @Delete(':id')
    apagarLivro(@Param('id') id: number): Promise<Livro> {
        return this.livroService.apagarLivro(id);
    }
}