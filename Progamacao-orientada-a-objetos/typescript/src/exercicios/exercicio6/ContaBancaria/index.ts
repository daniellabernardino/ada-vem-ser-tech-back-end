class ContaBancaria {
  private _saldo: number

  constructor(saldo: number) {
    this._saldo = saldo
  }

  get saldo() {
    return this._saldo
  }

  public sacar(valor: number): void {
    if (valor <= this._saldo) {
      this._saldo -= valor
      console.log(`
        Valor sacado!!
        Saldo atual: ${this._saldo}
      `)
    } else throw new Error("Saldo insuficiente para o valor do saque!")
  }

  public depositar(valor: number): void{
    this._saldo += valor 
    console.log(`
    Valor depositado!!
    Saldo atual: ${this._saldo}
    `)
    
  }


}

export { ContaBancaria }