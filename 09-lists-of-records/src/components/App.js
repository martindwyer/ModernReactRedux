import React from "react";
import SearchBar from "./SearchBar";
import searchPhotos from "../utilities/unsplash";

class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    const images = await searchPhotos(term);
    this.setState({ images: images });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "50px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
