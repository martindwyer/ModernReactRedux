import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import _ from "lodash";

class StreamEdit extends React.Component {
  getStream = async () => {
    console.log(this.props);
    await this.props.fetchStream(this.props.match.params.id);
  };

  componentDidMount() {
    this.getStream();
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    console.log(this.props);
    if (!this.props.stream) {
      return (
        <div>
          <span>Loading...</span>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Stream Edit</h1>
          <StreamForm
            onSubmit={this.onSubmit}
            initialValues={_.pick(this.props.stream, "title", "description")}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
