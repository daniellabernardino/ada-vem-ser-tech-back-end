class Carro{
  public modelo : string
  public ano : number
  public cor : string

  constructor(modelo: string, ano : number, cor :string){
    this.modelo = modelo
    this.ano = ano 
    this.cor = cor
  }
}
export {Carro}