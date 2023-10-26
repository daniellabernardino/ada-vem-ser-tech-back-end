/*
    Crie uma função "validarSenha" que recebe uma senha como parâmetro e retorna true se a senha atender aos seguintes critérios, sem utilizar regex:

    Pelo menos 8 caracteres de comprimento.
    Deve conter pelo menos uma letra maiúscula.
    Deve conter pelo menos uma letra minúscula.
    Deve conter pelo menos um número.
*/

const validarSenha = (senha) =>{
    let validacao = false

    if (senha.length < 8) {
        return validacao
    }

    for (const char of senha) {
        if (char === char.toUpperCase()) {            
            if (char === char.toLowerCase()) {            
                if (!isNaN(char)) {
                    validacao = true
                }
            }    
        }
    }
    return validacao
}
console.log(validarSenha('wQwcww2ww'))
console.log(validarSenha('ww2wcwww'))
console.log(validarSenha('wwwcwwww'))