import React, { Component } from "react";
import "./index.css";
import trator from "../../assets/Trator.svg";

class SobreNos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sobreNos">
        <div className="container1">
          <h1>Sobre Nós</h1>
          <p>A AD tractor é distribuidora das principais marcas</p> {""}
          <p>de peças para tratores e equipamentos pesados</p>
          <div>
            <button>Mais Detalhes</button>
          </div>
          <img src={trator} alt="Foto de um trator amarelo" />
        </div>

        <div className="container2">
          <h3>Oferecemos a você:</h3>
          <p>Redução de custo</p>
          <p>Aumento de produtividade</p>
          <p>Segurança</p>
        </div>
      </div>
    );
  }
}

export default SobreNos;
