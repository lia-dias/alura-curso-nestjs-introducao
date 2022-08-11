import { Injectable } from '@nestjs/common';
import Produto from './produto.model';

@Injectable()
export default class ProdutoService {
    private produtosDB: Produto[] = [];

    obterTodos(): Produto[]{
        return this.produtosDB.map((produto, index) => (!!produto ? {id: index, ...produto}: null)).filter( produto => !!produto); 
    };

    obterProdutoEspecifico(id: number): Produto {
        if(!!this.produtosDB[id]) return {id, ...this.produtosDB[id]};
        return null;
    }

    criarProduto(produto: Produto): Produto {
        const id = this.produtosDB.push(produto)-1;
        return {id, ...this.produtosDB[id]}; 
    }

    atualizarProduto(produto, id: number): Produto{
        if(!!this.produtosDB[id]) {
            this.produtosDB[id] = produto;
            return {id, ...this.produtosDB[id]};
        }
        return null;
    }

    apagarProduto(id: number): Produto {
        const produto = this.produtosDB[id];
        this.produtosDB[id] = null;
        return produto;
    }
}