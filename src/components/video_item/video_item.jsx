import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, selectedVideo }) => {
    const displayType = selectedVideo ? styles.list : styles.grid;
    const selectedId = selectedVideo && selectedVideo.id;
    return (
      <li
        className={`${styles.video} ${displayType}`}
        onClick={() => {
          onVideoClick(video);
        }}
      >
        <div
          className={`${styles.box} ${
            selectedId === video.id && styles.selected
          }`}
        >
          <div className={styles.thumbnail}>
            <img src={snippet.thumbnails.medium.url} alt="video thumbnail" />
          </div>
          <div className={styles.text}>
            <h3 className={styles.title}>{snippet.title}</h3>
            <p className={styles.channel}>{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
