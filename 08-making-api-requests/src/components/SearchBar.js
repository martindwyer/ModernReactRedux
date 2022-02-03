import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search-term">Search</label>
            <input
              id="search-term"
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
