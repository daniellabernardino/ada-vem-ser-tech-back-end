import { Autor } from "../Autor"
import { Livro } from "../Livro"
import { Usuario } from "../Usuario"

type LivroEmprestado = {
  livrosEmprestados: string[],
  pessoaQueEstaComLivro: string
}

class Biblioteca {
  static usuarios = [] as Usuario[]

  static autores = [] as Autor[]

  static livros = [] as Livro[]


  static adicionarLivro(livro: Livro): string {
    this.livros = [...this.livros, livro]
    return `Livro "${livro.titulo}" adicionado!!`
  }
  static adicionarUsuario(usuario: Usuario): string {
    this.usuarios = [...this.usuarios, usuario]
    return `Usuário "${usuario.nome}" adicionado!!`
  }

  static adicionarAutor(autor: Autor): string {
    this.autores = [...this.autores, autor]
    return `Autor "${autor.nome}" adicionado!!`
  }

  static removerLivro(livroParaRemover: Livro): string {
    this.livros = this.livros.filter(livro => livro !== livroParaRemover)
    return `Livro "${livroParaRemover.titulo}" removido!!`
  }

  static removerUsuario(usuarioParaRemover: Usuario): string {
    this.usuarios = this.usuarios.filter(usuario => usuario !== usuarioParaRemover)
    return `Usuário "${usuarioParaRemover.nome}" removido!!`
  }

  static removerAutor(autorParaRemover: Autor): string {
    this.autores = this.autores.filter(autor => autor !== autorParaRemover)
    return `Autor "${autorParaRemover.nome}" removido!!`
  }

  static buscarLivroPorAutor(nomeAutor: string): Livro[] {
    return this.livros.filter(livro => nomeAutor === livro.autor.nome)
  }

  static listarLivrosEmprestados(): LivroEmprestado[] {

    const lista: LivroEmprestado[] = this.usuarios
      .filter(usuario => usuario.livrosEmprestados.length !== 0)    
      .map((usuario) => ({
        pessoaQueEstaComLivro: usuario.nome,
        livrosEmprestados: usuario.livrosEmprestados.map((livro) => livro.titulo),
      }))
    return lista 
  }

  static listarLivrosDisponiveis(): Livro[] {
    return this.livros.filter(livro => livro.disponivel)
  }

}

export { Biblioteca }