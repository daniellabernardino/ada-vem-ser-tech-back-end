/*
    Você foi convidado para desenvolver um script para realizar os sorteios para uma  casa de 
    apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
    Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math: 
    Math.round(Math.random() * 10)
*/

function realizaSorteio() {
  let numSorteado
  const sorteio = []

  while (sorteio.length < 6 ) {
    numSorteado = Math.round(Math.random() * 60 + 1)

    sorteio.push(numSorteado)
  }

  return sorteio
} 

const sorteio = realizaSorteio()

console.log(`Números sorteados: ${sorteio}`)