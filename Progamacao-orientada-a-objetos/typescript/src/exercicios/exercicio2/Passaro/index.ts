import { Animal } from "../Animal";

class Passaro extends Animal{

  constructor(nome: string){
    super(nome)
  }
  
  emitirSom(): void {
      console.log("PIU PIU!!");
      
  }

  mover(): void {
      console.log(this.nome,"está voando!!");
      
  }
}

export {Passaro}