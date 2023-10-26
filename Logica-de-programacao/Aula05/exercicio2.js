/*
    Crie uma função "gerarSenhaAleatoria" que recebe um comprimento (tamanho) como parâmetro e 
    gera uma senha aleatória contendo letras maiúsculas, letras minúsculas e números.
*/

function gerarSenhaAleatoria(tamanho) {
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charLength = chars.length;
  var senha = '';
  while(senha.length < tamanho) {
      senha += chars.charAt(Math.floor(Math.random() * charLength))
  }
  return senha
}

console.log(gerarSenhaAleatoria(12))
console.log(gerarSenhaAleatoria(8))
