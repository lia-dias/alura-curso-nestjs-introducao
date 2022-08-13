import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Livro from './livro.model';

@Injectable()
export default class LivroService {

    constructor(@InjectModel(Livro) private readonly livroModel: typeof Livro){}

    async obterTodos(): Promise<Livro[]>{
        return this.livroModel.findAll();
    };

    async obterLivroEspecifico(id: number): Promise<Livro> {
        return this.livroModel.findByPk(id);
    }

    async criarLivro(livro: Livro): Promise<Livro> {
        return this.livroModel.create(livro);
    }

    async atualizarLivro(livro, id: number): Promise<Livro> {
        return this.livroModel.update(livro, {
            where: {
                id: id
            }
        }).then((result) => {if(result[0] > 0) return this.obterLivroEspecifico(id); return null; });
    }

    async apagarLivro(id: number): Promise<Livro> {
        const livro = await this.obterLivroEspecifico(id);
        livro.destroy();
        return livro;
    }
}