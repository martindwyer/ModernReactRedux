import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div>
        <h1>Song Detail</h1>
        <h5>
          <i>Select a song...</i>
        </h5>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Song Detail</h1>
        <h3>{song.title}</h3>
        <h4>Duration: {song.duration}</h4>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
