import React, { Component } from "react";

import "./index.css";

class Pecas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="pecas">
        <div className="container1">
          <h1>Peças</h1>
          <p>Somos distribuidores das principais marcas de peças</p> {""}
          <p>para tratores e equipamentos pesados, contamos com</p>
          <p>grande variedade, proporcionando otimização de</p>
          <p>custos e eficiência para nossos clientes.</p>
          <div>
            <button>Entrar em contato</button>
          </div>
        </div>

        <div className="container2">
          <div className="text">
            <p>Filtros</p>
            <p>Lâminas</p>
            <p>Rolamentos</p>
            <p>Vidros</p>
            <p>Radiadores</p>
            <p>Discos</p>
            <p>Correias</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pecas;
