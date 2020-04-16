class Dado extends React.Component {
  render() {
    return (
      React.createElement("button", { className: "dado" }, this.props.value));

  }}


class Tabuleiro extends React.Component {

  //adicionar construtor
  constructor(props) {
    super(props);
    this.state = {
      dados: Array(2).fill(null),
      aposta: 0,
      vitoria: 0,
      derrota: 0 };

  }
  //metodoDado
  renderizarDado(i) {
    return (
      React.createElement(Dado, { value: this.state.dados[i] }));

  }

  jogarDados() {
    const dados = this.state.dados.slice();
    const aposta = this.state.aposta;

    for (let i = 0; i < 3; i++) {
      dados[i] = random();
    }
    this.setState({
      dados: dados });


    const vitoria = this.state.vitoria;
    const derrota = this.state.derrota;

    if (calcularVitoria(dados, aposta)) {

      this.setState({ vitoria: vitoria + 1 });
    } else {

      this.setState({ derrota: derrota + 1 });

    }

  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { className: "status" }, status),
      React.createElement("div", { className: "jogador" }, "Aposta: ",
      React.createElement("input", { onInput: e => this.setState({ aposta: e.target.value }), type: "text", className: "aposta", id: "inputAposta" })),

      React.createElement("div", null,
      React.createElement("table", { className: "tabela" },
      React.createElement("thead", null,
      React.createElement("th", null, "DADO 1"),
      React.createElement("th", null, "DADO 2")),

      React.createElement("tbody", null,
      React.createElement("td", null, this.renderizarDado(0)),
      React.createElement("td", null, this.renderizarDado(1))))),



      React.createElement("div", null,
      React.createElement("table", null,
      React.createElement("tr", null,
      React.createElement("td", null, React.createElement("button", { onClick: () => this.jogarDados() }, " ", 'jogar', " "), " "),
      React.createElement("td", null, React.createElement("button", { onClick: () =>
        this.setState({
          dados: Array(2).fill(null),
          aposta: 0,
          vitoria: 0,
          derrota: 0 }) },

      'Reset', " "))))),



      React.createElement("div", null,
      React.createElement("ol", null, "Vitoria: " + this.state.vitoria),
      React.createElement("ol", null, "Derrota: " + this.state.derrota))));



  }}


class Jogo extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "game" },
      React.createElement("div", { className: "game-board" },
      React.createElement(Tabuleiro, { dados: Array(2).fill().map((value, pos) => pos) }))));



  }}


//--------------------------------------------------------
// Funçao para verificar se acertou ou errou
function calcularVitoria(dados, aposta) {

  const somaDados = dados[0] + dados[1];
  const numero = parseInt(aposta);

  if (somaDados == numero) {

    return 1;

  } else {

    return 0;
  }
}


// função para gerar numero random dos dados 
function random() {
  let r;
  return r = getRandomInt(1, 7);
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


//--------------------------------------------------------

ReactDOM.render(
React.createElement(Jogo, null),
document.getElementById("root"));
