import { Motor } from "../Motor"

class Carro {
  public motor: Motor

  constructor(){
    this.motor = new Motor
  }

  ligarCarro(): void {
    this.motor.ligar()
    console.log("Carro ligado!")    
  }

  desligarCarro(): void {
    this.motor.desligar()
    console.log("Carro desligado!")    
  }

}

export { Carro }