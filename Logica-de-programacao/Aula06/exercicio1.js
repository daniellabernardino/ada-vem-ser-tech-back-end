/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  5
  Ex: 0, 1, 1, 2, 3, 5
*/

function calculaFibonacci(termo){
  if (termo == 1 ) {
    return  0
  } else if (termo == 2) {
    return  1
  }

   const sequecia = [0 , 1 ]
   let atual

  for (let i = 2; i < termo; i++) {
    atual = sequecia[i - 1] + sequecia[i - 2]
    sequecia.push(atual)
  }

  return sequecia
  
}

console.log(calculaFibonacci(6));