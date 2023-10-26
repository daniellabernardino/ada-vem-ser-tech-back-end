const enviarEmail = require('./envia-email.js')
const emailBody = require('./create-email-body.js')
const lastVisit = require('./last-visit.js')


var clients = [
  { email: "Daniella@email.com", receiveEmail: true, dateOfVist: "2023-09-15" },
  { email: "Jõa@email.com", receiveEmail: false, dateOfVist: "2023-09-15" },
  { email: "Maria@email.com", receiveEmail: true, dateOfVist: "2023-09-15" },
  { email: "Breno@email.com", receiveEmail: false, dateOfVist: "2023-09-15" },
  { email: "Jose@email.com", receiveEmail: true, dateOfVist: "2023-02-15" },
  { email: "Jose@email.com", receiveEmail: false, dateOfVist: "2023-09-15" }
]

const currentDayInTheWeek = () => {
  const currentDate = new Date()
  return currentDate.getDay()
}

const sendEmailToClientes = (clients) => {

  const today = currentDayInTheWeek()

  if (today === 1) {
    for (const client of clients) {
      if (client.receiveEmail && lastVisit(client)) {

        const result = enviarEmail(
          client.email,
          "Novos Veículos em Destaque: Confira as Últimas Novidades na CarStore",
          emailBody()
        )

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

