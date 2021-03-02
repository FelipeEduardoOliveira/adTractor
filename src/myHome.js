import React, { Component } from "react";

import Home from "./pages/home";
import SobreNos from "./components/sobrenos";
import Pecas from "./components/pecas";
import Marcas from "./components/nossasMarcas";

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
      </div>
    );
  }
}

export default MyHome;
