import { Autor } from "../Autor"
import { ILivro } from "../ILivro"

class Livro implements ILivro{
  private static _proximoId = 1
  id: number
  titulo: string
  autor: Autor
  anoDePublicacao: number
  genero: string
  disponivel = true


  constructor(titulo: string, autor: Autor, anoPublicacao: number, genero: string) {
    this.titulo = titulo
    this.autor = autor
    this.anoDePublicacao = anoPublicacao
    this.genero = genero
    this.id = Livro._proximoId++
    
  } 

  emprestaLivro() {
    this.disponivel = false
  }
  
  devolveLivro() {
    this.disponivel = true      
  }

}

export { Livro }