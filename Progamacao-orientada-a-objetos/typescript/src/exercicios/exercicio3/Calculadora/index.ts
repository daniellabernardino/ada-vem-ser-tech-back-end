class Calculadora {

  static soma(num1: number, num2: number): void {
    const soma = num1 + num2
    console.log(`Soma: ${num1} + ${num2} = ${soma}`)
  }

  static subtracao(num1: number, num2: number): void {
    const subtracao = num1 - num2
    console.log(`Subtração: ${num1} - ${num2} = ${subtracao}`)
  }

  static multipicacao(num1: number, num2: number): void {
    const multipicacao = num1 * num2
    console.log(`Multiplicação: ${num1} * ${num2} = ${multipicacao}`)
  }

  static divisao(num1: number, num2: number): void {
    if (num2 !== 0) {
      const divisao = num1 / num2
      console.log(`Divisão: ${num1} / ${num2} = ${divisao}`)
    } else {
      throw new Error("Não é possível dividir por zero!!")
    }
  }

  static valorAbsoluto(num: number): void {
    const numAbsoluto = Math.abs(num)
    console.log(`Número absoluto: ${numAbsoluto}`)

  }
}

export { Calculadora }