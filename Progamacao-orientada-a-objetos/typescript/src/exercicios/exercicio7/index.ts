import { ConfiguracaoApp } from "./ConfiguracaoApp"


const exercicio7 = () => {
  
  const appConfig1 = ConfiguracaoApp.getConfig()
  const appConfig2 = ConfiguracaoApp.getConfig()
  const appConfig3 = ConfiguracaoApp.getConfig()
  appConfig1.idioma = "Português"
  appConfig1.tema = "Escuro"

  console.log(`
  Idioma na instância 2: ${appConfig2.idioma}
  Tema na instância 2: ${appConfig2.tema}
  `)

  console.log(appConfig1 === appConfig3 && appConfig1 === appConfig3)
  
  
}

export { exercicio7 }