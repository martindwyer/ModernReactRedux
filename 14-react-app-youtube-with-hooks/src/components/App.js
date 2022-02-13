import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [term, setTerm] = useState("nascar");

  const [videos, search, lastTerm] = useVideos(term);

  useEffect(() => {
    setSelectedVideo(videos[0]);
    setTerm(lastTerm);
  }, [videos]);

  return (
    <div className="App ui container">
      <h1 style={{ textAlign: "center" }}>YouTube Video Client</h1>
      <SearchBar onTermSubmit={search} />
      <div className="ui grid" style={{ marginTop: "2rem" }}>
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>

          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
