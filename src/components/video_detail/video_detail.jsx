import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video, video: { snippet } }) => {
  return (
    <div className={styles.content}>
      <iframe
        title={video.snippet.title}
        className={styles.video}
        type="text/html"
        width="100%"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className={styles.text}>
        <h2 className={styles.title}>{snippet.title}</h2>
        <span className={styles.channel}>{snippet.channelTitle}</span>
        <p className={styles.description}>{snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
