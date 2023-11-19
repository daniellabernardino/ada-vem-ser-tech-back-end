import { Livro } from "../Livro"

interface IUsuario {
  nome: string
  email: string
  livrosEmprestados: Livro[]

  pegarLivroEmprestado(livro: Livro): string

  devolverLivroEmprestado(livro: Livro): string

}

export { IUsuario }