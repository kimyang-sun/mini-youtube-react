import React from "react";

const VideoItem = props => {
  console.log(props);
  return <li>{props.video.snippet.title}</li>;
};

export default VideoItem;
