import { ContaBancaria } from "./ContaBancaria"


const exercicio6 = () => {
  const conta = new ContaBancaria(500)

  console.log(`Saldo atual: ${conta.saldo}`)

  conta.depositar(500)

  try {
    conta.sacar(2000)
  } catch (error) {
    console.log(error.message)

  }


}

export { exercicio6 }