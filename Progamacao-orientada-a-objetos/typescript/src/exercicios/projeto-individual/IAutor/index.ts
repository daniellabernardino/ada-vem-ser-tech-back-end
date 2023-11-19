
interface IAutor {

  nome: string
  dataNascimento: Date 
  nacionalidade: string


  adicionarLivrosAutorais(nome: string, ano: number, genero: string): void

  
}
export { IAutor }