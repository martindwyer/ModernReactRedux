import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

import youtube from "../config/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    term: "",
  };
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log("response:", response.data.items);

    this.setState({
      term: term,
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    console.log("From the App", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="App ui container">
        <h1 style={{ textAlign: "center" }}>YouTube Video Client</h1>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <h4>Search Results For: &nbsp;&nbsp;&nbsp;"{this.state.term}"</h4>
        <div className="ui grid" style={{ marginTop: "2rem" }}>
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
