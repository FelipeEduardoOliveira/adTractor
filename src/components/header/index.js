import React, { Component } from "react";
import "./index.css";
import logo from "../../assets/logo.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <div className="logo">
          <img src={logo} alt="Ilustração de um trator com o nome da empresa" />
        </div>

        <div className="menuBar">
          <nav>
            <ul>
              <li>Home</li>

              <li>Sobre nós</li>

              <li>Peças</li>
            </ul>
          </nav>

          <div className="faleConosco">
            <h1>Fale Conosco</h1>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
