import "./SeasonDisplay.css";

import { React, Component } from "react";

/**
 * Note: Stephen's lectures make this a functional component.  IMHO,
 * it ends up a refactored mess.  Since we're learning lifecycle methods
 * for classes, I decided to use the class and lifecycle methods approach
 * below...
 */

class SeasonDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: props.lat,
      month: new Date().getMonth(),
      season: "",
      iconName: "",
    };

    this.getSeason = this.getSeason.bind(this);
  }

  getSeason = (lat, month) => {
    let season = "";
    if (month > 2 && month < 9) {
      season = lat > 0 ? "summer" : "winter";
    } else {
      season = lat > 0 ? "winter" : "summer";
    }
    return season;
  };

  componentDidMount() {
    let season = this.getSeason(this.state.lat, this.state.month);
    let iconName = season === "winter" ? "snowflake" : "sun";
    this.setState({ season, iconName });
  }

  componentDidUpdate() {
    console.log("update:", this.state);
  }

  render() {
    return (
      <div className={`season-display ${this.state.season}`}>
        <i className={`${this.state.iconName} icon massive icon-left`}></i>{" "}
        <h1>
          {this.state.season === "winter"
            ? "Burr, it is chilly!"
            : "Let's hit the beach!"}
        </h1>
        <i className={`${this.state.iconName} icon massive icon-right`}></i>
      </div>
    );
  }
}

export default SeasonDisplay;
