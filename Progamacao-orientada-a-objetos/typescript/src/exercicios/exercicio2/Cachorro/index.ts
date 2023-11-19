import { Animal } from "../Animal";

class Cachorro extends Animal {

  constructor(nome: string){
    super(nome)
  }
  
  emitirSom(): void {
      console.log("AU AU!!");
      
  }

  mover(): void {
      console.log(this.nome,"está andando!!");
      
  }
}

export {Cachorro}