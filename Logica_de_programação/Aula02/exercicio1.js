/* 
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e você foi contratado para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste seguindo o seguinte critério, baseado no salário atual:

    salários até R$ 1500,00 (incluindo) : aumento de 20%
    salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
    salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
    salários de R$ 2000,00 em diante : aumento de 5% 
    
Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

const salAtual = 1500
let valorAumento, novoSalario, percentual

if (salAtual <= 1500) {
  percentual = 20 
  valorAumento = salAtual * 0.20
}else if(salAtual < 1700) {
  percentual = 15 
  valorAumento = salAtual * 0.15
}else if(salAtual < 2000) {
  percentual = 10 
  valorAumento = salAtual * 0.10
}else {
  percentual = 5
  valorAumento = salAtual * 0.05
}

novoSalario = salAtual + valorAumento

console.log("Salário antigo:" + salAtual.toLocaleString("pt-br", {style: "currency", currency:"BRL"}))