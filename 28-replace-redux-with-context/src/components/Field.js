import React from "react";
import LanguageContext from "../context/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;

  renderText = (language) => {
    switch (language) {
      case "english":
        return "Name";
      case "dutch":
        return "Naam";
      default:
        return "Name";
    }
  };

  render() {
    return (
      <div className="ui field">
        <label>{this.renderText(this.context.language)}</label>
        <input />
      </div>
    );
  }
}

export default Field;
