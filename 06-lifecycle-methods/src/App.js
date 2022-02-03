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
  }

  // Alternative way to initialize state (as opposed to constructor above)
  // i.e. if all you need is state for your class, don't need constructor
  // state = {
  //   lat: null,
  //   errorMessage: "",
  // };

  componentDidMount() {
    console.log("component App rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component is unmounting...");
    setTimeout(console.log("bye"), 3000);
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          <h3>Error: {this.state.errorMessage} </h3>
        </div>
      );
    } else if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    } else {
      return <div>loading...</div>;
    }
  }
}

export default App;
