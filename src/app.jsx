import styles from "./app.module.css";
import React, { useCallback, useEffect, useState } from "react";
import SearchHeader from "./components/serarch_header/search_header";
import VideoList from "./components/video_list/video_list";
import VideoDetail from "./components/video_detail/video_detail";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // useEffect - componentDidMount와 componentDidUpdate, componentWillUnmount를 합쳐놓은 것에 해당됩니다.
  // 원래 함수형 컴포넌트는 계속해서 리렌더되는 특성이 있는데
  // 두번째 속성으로 [특정 state]를 넣어주면 그 state가 바뀌거나 할때 새롭게 렌더해줌 (다중으로 넣기 가능)
  // [] 이렇게 빈것을 넣어주면 처음에 마운트 될때만 렌더해줌
  // useEffect 함수에 이벤트를 넣어주고 마지막에 return값이 있으면 그것이 componentWillUnmount와 같습니다.
  useEffect(() => {
    youtube
      .mostPopular()
      .then(items => setVideos(items))
      .catch(error => console.log("error", error));
  }, [youtube]);

  // useCallback - 렌더될때마다 해당 콜백함수가 계속해서 재생성 되기때문에
  // props로 넘겼을때 SearchHeader 컴포넌트가 memo나 pureComponent를 써도 바뀐걸로 간주하여 리렌더를 해버림
  // 그걸 방지하기 위해 useCallback 을 사용함
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

  const onVideoClick = useCallback(
    video => {
      setSelectedVideo(video);
      window.scrollTo(0, 0);
    },
    [youtube]
  );

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
            selectedVideo={selectedVideo}
          ></VideoList>
        </div>
      </section>
    </React.Fragment>
  );
};

export default App;
