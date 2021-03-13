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
        {/* <div className="logo">
          
        </div> */}

        <div className="menuBar">
          <img src={logo} alt="Ilustração de um trator com o nome da empresa" />
          <nav>
            <ul>
              <li>Home</li>

              <li>Sobre nós</li>

              <li>Peças</li>
            </ul>
          </nav>

          <div className="faleConoscoHeader">
            <h1>Fale Conosco</h1>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
