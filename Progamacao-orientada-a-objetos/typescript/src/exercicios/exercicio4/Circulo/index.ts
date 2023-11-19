import { IFormaGeometrica } from "../IFormaGeometrica";

class Circulo implements IFormaGeometrica{
  public raio: number

  constructor(raio: number){
    this.raio = raio
  }

  public calcularArea(): number {
      const area = Math.PI * Math.pow(this.raio, 2) 
      return area
  }

  public calcurarPerimetro(): number {
      const perimetro = 2 * Math.PI * this.raio
      return perimetro 
  }
}

export {Circulo}