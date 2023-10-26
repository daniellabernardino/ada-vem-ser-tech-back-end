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
  ${newVehicles}
  ${bestSellers}
  ${conditionsOfPurchase}`
  return emailBody
}

module.exports = createEmailBody