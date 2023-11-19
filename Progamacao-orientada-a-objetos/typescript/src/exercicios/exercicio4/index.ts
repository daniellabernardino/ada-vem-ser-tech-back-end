import { Circulo } from "./Circulo"
import { Quadrado } from "./Quadrado"


const exercicio4 = () => {
  
  const quadrado = new Quadrado(5)

  const circulo = new Circulo(6)

  console.log(`
    Área do quadrado = ${quadrado.calcularArea()}
    Perímetro do quadrado = ${quadrado.calcurarPerimetro()}
    
    Área do circulo = ${circulo.calcularArea()}
    Perímetro do circulo = ${circulo.calcurarPerimetro()}

  `)
  

}

export { exercicio4}