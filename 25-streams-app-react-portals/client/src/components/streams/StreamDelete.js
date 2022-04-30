import React from "react";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  onApprove = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  actions = (
    <React.Fragment>
      <div className="ui approve button negative" onClick={this.onApprove}>
        Delete
      </div>
      <div className="ui cancel button" onClick={() => history.push("/")}>
        Cancel
      </div>
    </React.Fragment>
  );

  getStream = async () => {
    console.log(this.props);
    await this.props.fetchStream(this.props.match.params.id);
  };

  componentDidMount() {
    this.getStream();
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    } else {
      return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
    }
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
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.actions}
          onDismiss={() => history.push("/")}
        />
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
