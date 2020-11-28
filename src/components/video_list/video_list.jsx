import React, { memo } from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = memo(({ videos, onVideoClick, selectedVideo }) => {
  console.log("nono");
  return (
    <ul className={styles.videos}>
      {videos.map(video => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          selectedVideo={selectedVideo}
        ></VideoItem>
      ))}
    </ul>
  );
});

export default VideoList;
