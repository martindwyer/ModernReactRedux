import React from "react";
import { connect } from "react-redux";

class StreamList extends React.Component {
  render() {
    return (
      <div>
        <h1>StreamList</h1>
        <p>Current user: {this.props.currentUser}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.auth.userId };
};

export default connect(mapStateToProps)(StreamList);
