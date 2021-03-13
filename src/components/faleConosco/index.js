import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

import logoWhats from "../../assets/whatsApp.svg";
import logoemail from "../../assets/email.svg";

class FaleConosco extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="faleConosco">
        <div className="container1">
          <h1>Fale Conosco</h1>
          <div>
            <p className="textP">
              Tire sua dúvida agora mesmo! mande uma mensagem, te ajudaremos da
              melhor forma possivel.
            </p>{" "}
          </div>
          {""}
        </div>

        <button className="divWhatsApp">
          <img src={logoWhats} alt="Logotipo do WhatsApp" />
          <a
            href="https://api.whatsapp.com/send?phone=5511995193647&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20AdTractor!"
            target="blank_"
          >
            CLIQUE AQUI PARA INICIAR UMA CONVERSA
          </a>

          <img src={logoWhats} alt="Logotipo do WhatsApp" />
        </button>

        <div className="containerEmail">
          <img src={logoemail} alt="Logo tipo da caixa de email" />
          <a href="mailto:contato@adtractor.com.br?subject=Site%20-%20Contato&body=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20!%20">
            contato@adtractor.com.br
          </a>
        </div>
      </div>
    );
  }
}

export default FaleConosco;
