import { Biblioteca } from "../Biblioteca"
import { IAutor } from "../IAutor"
import { Livro } from "../Livro"

class Autor implements IAutor {
  nome: string
  dataNascimento: Date
  nacionalidade: string

  constructor(nome: string, dataNascimento: string, nacionalidade: string) {
    this.nome = nome
    this.dataNascimento = new Date(dataNascimento)
    this.nacionalidade = nacionalidade
  }

  adicionarLivrosAutorais(nome: string, ano: number, genero: string) {
    const livro = new Livro(nome, this, ano, genero)
    Biblioteca.adicionarLivro(livro)
  }

}

export { Autor }