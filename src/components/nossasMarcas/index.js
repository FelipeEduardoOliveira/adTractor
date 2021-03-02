import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

import volvo from "../../assets/volvo.png";
import cat from "../../assets/cat.png";
import casse from "../../assets/casse.png";
import hyundai from "../../assets/hyundai.png";
class Marcas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="marcas">
        <div className="container1">
          <h1>Nossas Marcas</h1>
          <p>Confira algumas de nossas marcas abaixo:</p> {""}
        </div>

        <Carousel className="carousel">
          <div className="carouselWidth">
            <img src={volvo} />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div className="carouselWidth">
            <img src={cat} />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div className="carouselWidth">
            <img src={casse} />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div className="carouselWidth">
            <img src={hyundai} />
            {/* <p className="legend">Legend 2</p> */}
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Marcas;
