import { Cachorro } from "./Cachorro";
import { Passaro } from "./Passaro";
const exercicio2 = () =>{

  const cachorro1 = new Cachorro("Thor")
  const passaro1 = new Passaro("Zéca")

  cachorro1.emitirSom()
  cachorro1.mover()

  passaro1.emitirSom()
  passaro1.mover()
   

}

export{exercicio2}