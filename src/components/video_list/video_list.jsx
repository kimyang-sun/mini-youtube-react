import VideoItem from "../video_item/video_item";

import React from "react";

const VideoList = props => {
  return (
    <ul className="video-list">
      {props.videos.map(video => (
        <VideoItem key={video.id} video={video}></VideoItem>
      ))}
    </ul>
  );
};

export default VideoList;
