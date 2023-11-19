import { Calculadora } from "./Calculadora"

const exercicio3 = () => {

  Calculadora.soma(5, 7)
  Calculadora.subtracao(3, 2)
  Calculadora.multipicacao(5, 4)

  try {
    Calculadora.divisao(10, 5)    
  } catch (error) {
    console.log(error.message)    
  }

  Calculadora.valorAbsoluto(6)

}

export { exercicio3 }