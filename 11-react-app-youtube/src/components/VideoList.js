import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const { videos, onVideoSelect } = props;

  const renderedList = videos.map((video) => {
    return (
      <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.etag} />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
