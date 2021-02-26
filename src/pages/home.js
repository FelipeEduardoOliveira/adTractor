import React, { Component } from "react";
import "../style/home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="background">
        <div className="containerText">
          <div className="textHome">
            <h1>
              Peças para <strong>tratores</strong> e{" "}
            </h1>
            <h1>
              <strong> equipamentos pesados</strong>
            </h1>

            <p>
              Impulsionamos o desenvolvimento sustentável de nossos clientes
            </p>

            <button>SABER MAIS</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
