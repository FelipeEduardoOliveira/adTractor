import React, { Component } from "react";

import Home from "./pages/home";
import SobreNos from "./components/sobrenos";

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
      </div>
    );
  }
}

export default MyHome;
