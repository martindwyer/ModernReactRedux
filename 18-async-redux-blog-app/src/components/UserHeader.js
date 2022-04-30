import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    } else {
      return (
        <div>
          <p>{user.name}</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = {
    user: state.users.find((user) => user.id === ownProps.userId),
  };

  return user;
};

export default connect(mapStateToProps)(UserHeader);
