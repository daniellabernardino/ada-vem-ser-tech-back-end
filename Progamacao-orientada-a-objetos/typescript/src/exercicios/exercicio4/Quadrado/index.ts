import { IFormaGeometrica } from "../IFormaGeometrica";

class Quadrado implements IFormaGeometrica{
  public lado: number
  
  constructor(lado:number) {
    this.lado = lado
  }

  public calcurarPerimetro(): number {
      const perimetro =  4 * this.lado
      return perimetro
  }

  public calcularArea(): number {
      const area = this.lado * this.lado
      return area
  }
}

export {Quadrado}