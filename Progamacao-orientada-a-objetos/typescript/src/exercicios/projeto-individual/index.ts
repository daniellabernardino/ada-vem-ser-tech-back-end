import { log } from "console"
import { Autor } from "./Autor"
import { Biblioteca } from "./Biblioteca"
import { Livro } from "./Livro"
import { Usuario } from "./Usuario"


const projeto = async () => {


  const autor1 = new Autor("Breno", "02-10-2003", "Canadense")
  const autor2 = new Autor("Dani", "05-10-2004", "Brasileira")

  const livro1 = new Livro("Alice in the wonderland", autor1, 1999, "Aventura")
  const livro2 = new Livro("Leviatã", autor1, 2023, "Filo")
  const livro3 = new Livro("CleanCode", autor2, 2023, "Programação")

  const usuario1 = new Usuario("Dani", "dani@gmail")
  const usuario2 = new Usuario("Maria", "Maria@gmail")
  const usuario3 = new Usuario("Tamarindo", "tamarindo@gmail")

  console.log( Biblioteca.adicionarUsuario(usuario1))
  console.log( Biblioteca.adicionarUsuario(usuario2))
  console.log( Biblioteca.adicionarUsuario(usuario3))
 
  console.log(Biblioteca.adicionarAutor(autor1))
  console.log(Biblioteca.adicionarAutor(autor2))
  
  console.log(Biblioteca.adicionarLivro(livro1))
  console.log(Biblioteca.adicionarLivro(livro2))
  console.log(Biblioteca.adicionarLivro(livro3)) 
  
  autor2.adicionarLivrosAutorais("Como comprar uma casinha do canada", 2000, "Romace")

  console.log("Livro do autor Breno: ", Biblioteca.buscarLivroPorAutor("Breno"))
  console.log("Livro da autora Dani: ", Biblioteca.buscarLivroPorAutor("Dani"))
  
  console.log(usuario1.pegarLivroEmprestado(livro1))
  console.log(usuario2.pegarLivroEmprestado(livro2))
  console.log(usuario3.pegarLivroEmprestado(livro3))
  console.log(usuario2.pegarLivroEmprestado(livro1))
  
  console.log("Livro emprestados: ", Biblioteca.listarLivrosEmprestados())
  console.log("Livro disponíveis: ", Biblioteca.listarLivrosDisponiveis())
  
  console.log(usuario1.devolverLivroEmprestado(livro1))

  console.log(Biblioteca.removerLivro(livro1))
  console.log(Biblioteca.removerUsuario(usuario3))
  console.log(Biblioteca.removerAutor(autor1))

}

export { projeto }