import React from 'react';
import CookieConsent, { Cookies } from "react-cookie-consent";

export default class Consent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      var: "",
      hidden: false,
    }
  }
  componentDidMount() {
    this.setState({});
  }
  render() {
    return (
      <div>
        <CookieConsent
          location="bottom"
          buttonText="J'ACCEPTE"
          declineButtonText="JE REFUSE"
          cookieName="myAwesomeCookieName2"
          style={{ background: "rgba(0, 0, 0, 0.75)" }}
          buttonStyle={{ color: "#4e503b", fontSize: "10px" }}
          declineButtonStyle={{fontSize: "10px" }}
          expires={10}
          enableDeclineButton
          onDecline={() => {
            alert("nay!");
          }}
          onAccept={() => {
            alert("Accept was triggered by clicking the Accept button");
          }}
        >
          <span style={{ fontSize: "10px" }}>Afin d'assurer l'experience la plus optimale sur notre plateforme web, nous utilisons des cookies d'analyse qui requierent votre consentement selon l'article 82 de la loi "Informatique et Libertés".
          Veuillez SVP cliquer sur J'ACCEPTE afin de poursuivre votre experience et JE REFUSE si vous souhaitez désactiver les cookies.</span>
        </CookieConsent>
      </div>
    );
  }
}