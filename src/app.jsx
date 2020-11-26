import "./app.css";
import React, { useEffect, useState } from "react";
import SearchHeader from "./components/serarch_header/search_header";
import VideoList from "./components/video_list/video_list";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    youtube
      .mostPopular()
      .then(items => setVideos(items))
      .catch(error => console.log("error", error));
  }, []);

  const onSearch = query => {
    youtube
      .search(query)
      .then(items => setVideos(items))
      .catch(error => console.log("error", error));
  };

  return (
    <React.Fragment>
      <SearchHeader onSearch={onSearch}></SearchHeader>
      <VideoList videos={videos}></VideoList>
    </React.Fragment>
  );
};

export default App;
