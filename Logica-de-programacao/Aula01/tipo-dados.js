//objeto 

let client = {
  name: "Daniella",
  address:{
    street: 'rua a',
    number: 34
  }
}

client.age = 19

console.log("Cliente 1: ", client)
// console.log(client.address.number)

// a atribuição é feita por referência, atribui endereço de memória 
// let client2 = client 

//atribuição por valor (spread operator), atribui o valor um por um do outro objeto
// ex: 
let client2 = { ...client }

client2.name = "Joao"
console.log("Cliente 1 alterado: ", client)
console.log("Cliente 2: ", client2)

//Ao invez disso 
// let address = client.adress
//Desestruturação, consegue segregar carc de um objeto pra trabalhar de forma mais simples
let {address} = client
console.log(address)

