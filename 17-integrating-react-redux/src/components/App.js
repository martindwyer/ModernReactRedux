import React from "react";
import SongList from "./SongList";
import SongDetai from "./SongDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <h1>App</h1>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetai />
        </div>
      </div>
    </div>
  );
};

export default App;
