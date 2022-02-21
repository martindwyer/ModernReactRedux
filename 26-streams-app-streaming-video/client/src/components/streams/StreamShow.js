import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from "flv.js";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  getStream = async () => {
    await this.props.fetchStream(this.props.match.params.id);
  };

  componentDidMount() {
    this.getStream();
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }
  buildPlayer = () => {
    if (this.player || !this.props.stream) {
      return;
    }
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  };

  render() {
    if (!this.props.stream) {
      return (
        <div>
          <span>Loading...</span>
        </div>
      );
    } else {
      return (
        <div>
          <video ref={this.videoRef} style={{ width: "100%" }} controls />
          <h1>Stream Show</h1>
          <h2>{this.props.stream.title}</h2>
          <h4>{this.props.stream.description}</h4>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
