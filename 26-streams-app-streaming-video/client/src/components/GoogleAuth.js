import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import { googleClientID } from "../config/keys";
class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: googleClientID,
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          className="ui google button"
          style={{ backgroundColor: "white", padding: ".5rem 0rem .5rem 0rem" }}
          onClick={this.onSignOutClick}
        >
          <i className="google green icon" />
          Sign Out
        </button>
      );
    } else if (!this.props.isSignedIn) {
      return (
        <button
          className="ui google button"
          onClick={this.onSignInClick}
          style={{ backgroundColor: "white", padding: ".5rem 0rem .5rem 0rem" }}
        >
          <i className="google orange icon" />
          Sign in with Google
        </button>
      );
    }
  }
  render() {
    return <div className="item">{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
