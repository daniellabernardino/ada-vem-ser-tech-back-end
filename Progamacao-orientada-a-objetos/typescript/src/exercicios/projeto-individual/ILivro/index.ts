import { Autor } from "../Autor"

interface ILivro {
  id: number
  titulo: string
  autor: Autor
  anoDePublicacao: number
  genero: string
  disponivel: boolean
 

  emprestaLivro(): void

  devolveLivro(): void


}

export { ILivro }