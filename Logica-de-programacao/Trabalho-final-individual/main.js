var clients = [
  { email: "Daniella@email.com", receiveEmail: true },
  { email: "Jõa@email.com", receiveEmail: false },
  { email: "Maria@email.com", receiveEmail: true },
  { email: "Breno@email.com", receiveEmail: false }
]

const currentDayInTheWeek = () => {
  const currentDate = new Date()
  return currentDate.getDay()
}

const createEmailBody = () => {
  const newVehicles =
    `Confira nossos novos veículos:
      -> BMW
      -> Land Rover
      -> Ferrari
      -> DeTomasco
      -> Lamborghini`

  const bestSellers =
    `Veja os modelos mais vendidos: 
    -> Celta
    -> GOL
    -> UNO
    -> Palio
    -> Peugeot`

  const conditionsOfPurchase =
    `Condições especiais para aquisição!!
    -> Garantia vitalícia, para que você possa dirigir com tranquilidade. 
    -> Na compra de um carro elétrico, você ganha um desconto de 50% na conta de luz por um ano.`

  const emailBody = `
  ${newVehicles}\n\n
  ${bestSellers}\n\n
  ${conditionsOfPurchase}`
  return emailBody
}

const sendEmailToClientes = (clients)=> {
  const enviarEmail = require('./envia-email.js')

  const today = currentDayInTheWeek()

  if (today === 1) { 
    for (const client of clients) {
      if (client.receiveEmail) {
        
        const emailBody = createEmailBody()        
        
        const result = enviarEmail(client.email, "Novos Veículos em Destaque: Confira as Últimas Novidades na CarStore", emailBody)
        
        if (result.status === "Sucess") {
          console.log(`E-mail enviado para ${client.email}: ${result.message}`)
        } else {
          console.log(`Erro ao enviar e-mail para ${client.email}: ${result.message}`)
        }
      }
    }
  } else {
    console.log("Hoje não é segunda-feira. Não enviamos e-mails.")
  }

}

sendEmailToClientes(clients)

