abstract class Animal {

  public nome : string  

  constructor(nome : string) {
    this.nome = nome
  }

  abstract emitirSom() : void
  abstract mover() : void
}

export{Animal}