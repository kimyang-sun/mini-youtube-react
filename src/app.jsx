import styles from "./app.module.css";
import React, { useCallback, useEffect, useState } from "react";
import SearchHeader from "./components/serarch_header/search_header";
import VideoList from "./components/video_list/video_list";
import VideoDetail from "./components/video_detail/video_detail";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    youtube
      .mostPopular()
      .then(items => setVideos(items))
      .catch(error => console.log("error", error));
  }, [youtube]);

  const onSearch = useCallback(
    query => {
      youtube
        .search(query)
        .then(items => {
          setVideos(items);
          setSelectedVideo(null);
        })
        .catch(error => console.log("error", error));
    },
    [youtube]
  );

  const onVideoClick = video => {
    setSelectedVideo(video);
  };

  return (
    <React.Fragment>
      <SearchHeader onSearch={onSearch}></SearchHeader>
      <section className={styles.container}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo}></VideoDetail>
          </div>
        )}
        <div className={selectedVideo ? styles.list : styles.grid}>
          <VideoList
            videos={videos}
            onVideoClick={onVideoClick}
            display={selectedVideo ? "list" : "grid"}
          ></VideoList>
        </div>
      </section>
    </React.Fragment>
  );
};

export default App;
