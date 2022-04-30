import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdminButtons(stream) {
    if (stream.userId === this.props.currentUser) {
      return (
        <div>
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <div className="row">
            <i className="large middle aligned icon camera" />
          </div>
          <div className="row">
            <div className="content">
              <Link to={`/streams/show/${stream.id}`} className="ui header">
                {stream.title}
              </Link>
              <div className="description">{stream.description}</div>
            </div>
          </div>
          <div className="row">{this.renderAdminButtons(stream)}</div>
        </div>
      );
    });
  }

  renderCreateButton() {
    if (this.props.currentUser) {
      return (
        <Link to="streams/new" className="ui button green">
          Create Stream
        </Link>
      );
    }
  }
  render() {
    console.log(this.props.streams);
    return (
      <div>
        <h1>Stream List</h1>
        <div className="ui celled list">{this.renderList()}</div>
        <div style={{ textAlign: "right" }}>{this.renderCreateButton()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.userId,
    streams: Object.values(state.streams),
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
