import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "nascar",
  };

  onInputChange = (evt) => {
    this.setState({ term: evt.target.value });
  };

  onFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  componentDidMount() {
    this.props.onTermSubmit(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>YouTube Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
