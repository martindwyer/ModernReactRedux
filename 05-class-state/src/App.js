import { React, Component } from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  constructor(props) {
    super(props);

    // this is the only time direct assignment is used with state
    this.state = {
      lat: null,
      errorMessage: "",
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          <h3>Error: {this.state.errorMessage} </h3>

          <SeasonDisplay />
        </div>
      );
    } else if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <h3>Latitude: {this.state.lat} </h3>

          <SeasonDisplay />
        </div>
      );
    } else {
      return <div>loading...</div>;
    }
  }
}

export default App;
