const alunos = [
  { nome: "Carlos", idade: 15 },
  { nome: "Julia", idade: 18 },
  { nome: "Pedro", idade: 12 },
  { nome: "Aline", idade: 23 },
  { nome: "Joana", idade: 16 },
  { nome: "Maisa", idade: 13 },
];
// 1. Utilize o método "filter" novamente para criar um novo array com os alunos que têm 
// idade menor que 20 anos.
const alunosMenosDe20 = alunos.filter(aluno => aluno.idade < 20);
console.log('Alunos com menos de 20: ', alunosMenosDe20);
// 2. Utilize o método "filter" mais uma vez para criar um novo array com os alunos cujo 
// nome começa com a letra "J"
const alunosComNomeJ = alunos.filter(aluno => aluno.nome[0] === "J");
console.log('Alunos que comecem com a letra J ',alunosComNomeJ);
