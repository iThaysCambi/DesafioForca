class Forca {

  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    this.dadosDoJogo = this.buscarDadosDoJogo()
    this.dadosDoJogo.palavra = new Array(palavraSecreta.length).fill("_")
    this.estadoDoJogo = "aguardando chute";

  }

  chutar(letra) {
    if (letra.length !== 1) {
      console.log("a")
      return
    }

    if (this.palavraSecreta.includes(letra) === false) {
      if (this.dadosDoJogo.letrasChutadas.includes(letra) === false) {
        this.dadosDoJogo.letrasChutadas.push(letra)
        this.dadosDoJogo.vidas -= 1

      }

      return

    }

    this.dadosDoJogo.letrasChutadas.push(letra)

    for (let i = 0; i < this.palavraSecreta.length; i++) {
      const letraAtual = this.palavraSecreta[i];

      if (letraAtual === letra) {
        this.dadosDoJogo.palavra[i] = letra;
      }
    }

    this.estadoDoJogo = this.buscarEstado()
    console.log(this.estadoDoJogo)

  }

  buscarEstado() {
    if (this.dadosDoJogo.vidas === 0) {

      return "perdeu";

    }

    if (this.dadosDoJogo.palavra.join("") === this.palavraSecreta) {

      return "ganhou";

    }

    return "aguardando chute";

  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: [], // Deve conter todas as letras chutadas
      vidas: 6, // Quantidade de vidas restantes
      palavra: [] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;
