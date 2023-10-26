/*
    Crie o script de uma calculadora, usando o conceito abordado em aula de funções de alta ordem.
*/

const calculadora = (op) => {
  switch (op) {
    case "somar":
      return function (n1, n2) {
        return n1 + n2;
      }

    case "subtracao":
      return function (n1, n2) {
        return n1 - n2
      }
    case "multiplicacao":
      return function (n1, n2) {
        return n1 * n2
      }
    case "divisao":
      return function (n1, n2) {
        return n1 / n2
      }
  }
}
const termo = calculadora("somar")
console.log(op(2, 3));