import { IUsuario } from "../IUsuario"
import { Livro } from "../Livro"

class Usuario implements IUsuario {
  nome: string
  email: string
  livrosEmprestados = [] as Livro[]

  constructor(nome: string, email: string,) {
    this.nome = nome
    this.email = email

  }
  pegarLivroEmprestado(livro: Livro): string {
    if (livro.disponivel) {
      this.livrosEmprestados = [...this.livrosEmprestados, livro]
      livro.emprestaLivro()
      return `Livro "${livro.titulo}" emprestado com sucesso!!`
    }
    return `Livro "${livro.titulo}" indisponível:(`
  }
  devolverLivroEmprestado(livroParaDevolver: Livro): string {
    if(!livroParaDevolver.disponivel){
      this.livrosEmprestados = this.livrosEmprestados.filter(livro => livro !== livroParaDevolver)
      livroParaDevolver.devolveLivro()
      return `Livro "${livroParaDevolver.titulo}" devolvido com sucesso!!`
    }
    return `Livro "${livroParaDevolver.titulo}" não foi emprestado:(`
     
  }



}

export { Usuario }