import { Injectable } from '@nestjs/common';
import Livro from './livro.model';

@Injectable()
export default class LivroService {
    private livrosDB: Livro[] = [];

    obterTodos(): Livro[]{
        return this.livrosDB.map((livro, index) => (!!livro ? {id: index, ...livro}: null)).filter( livro => !!livro); 
    };

    obterLivroEspecifico(id: number): Livro {
        if(!!this.livrosDB[id]) return {id, ...this.livrosDB[id]};
        return null;
    }

    criarLivro(livro: Livro): Livro {
        const id = this.livrosDB.push(livro)-1;
        return {id, ...this.livrosDB[id]}; 
    }

    atualizarLivro(livro, id: number): Livro{
        if(!!this.livrosDB[id]) {
            this.livrosDB[id] = livro;
            return {id, ...this.livrosDB[id]};
        }
        return null;
    }

    apagarLivro(id: number): Livro {
        const livro = this.livrosDB[id];
        this.livrosDB[id] = null;
        return livro;
    }
}