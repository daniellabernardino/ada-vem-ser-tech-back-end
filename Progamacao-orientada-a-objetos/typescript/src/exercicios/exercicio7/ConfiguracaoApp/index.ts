class ConfiguracaoApp {
  private static instancia: ConfiguracaoApp
  private _tema: string
  private _idioma: string

  public static getConfig(): ConfiguracaoApp {
    if (!ConfiguracaoApp.instancia) {
      ConfiguracaoApp.instancia = new ConfiguracaoApp();
    }

    return ConfiguracaoApp.instancia

  }

  public set idioma(idioma: string) {
    this._idioma = idioma
  }

  public get idioma(): string {
    return this._idioma
  }
  public set tema(tema: string) {
    this._tema = tema
  }
  public get tema(): string {
    return this._tema
  }


}
export { ConfiguracaoApp }