import React, { Component } from "react";

import Home from "./pages/home";
import SobreNos from "./components/sobrenos";
import Pecas from "./components/pecas";
import Marcas from "./components/nossasMarcas";
import FaleConosco from "./components/faleConosco";

class MyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Home />
        <SobreNos />
        <Pecas />
        <Marcas />
        <FaleConosco />
      </div>
    );
  }
}

export default MyHome;
