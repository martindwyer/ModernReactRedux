import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {
  renderText = (value) => {
    switch (value) {
      case "english":
        return "Submit";
      case "dutch":
        return "Voorleggen";
      default:
        return "Submit";
    }
  };

  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderText(value)}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return (
      <React.Fragment>
        <ColorContext.Consumer>
          {(color) => this.renderButton(color)}
        </ColorContext.Consumer>
      </React.Fragment>
    );
  }
}

export default Button;
