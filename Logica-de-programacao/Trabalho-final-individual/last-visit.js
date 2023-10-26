const lastVisit = (client) => {
  const currentDate = new Date()
  const lastMonth = currentDate.getMonth()

  const dateOfVist = client.dateOfVist
  const visitDate = new Date(dateOfVist)
  const monthVisit = visitDate.getMonth() + 1

  return monthVisit === lastMonth
}

module.exports = lastVisit