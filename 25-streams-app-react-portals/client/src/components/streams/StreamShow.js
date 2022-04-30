import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  getStream = async () => {
    console.log(this.props);
    await this.props.fetchStream(this.props.match.params.id);
  };

  componentDidMount() {
    this.getStream();
  }

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
          <h1>Stream Show</h1>
          {this.props.stream.id}
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
