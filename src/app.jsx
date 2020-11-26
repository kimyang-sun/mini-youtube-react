import "./app.css";
import React, { useEffect, useState } from "react";
import SearchHeader from "./components/serarch_header/search_header";
import VideoList from "./components/video_list/video_list";

const App = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=AIzaSyBWHiRMxAh8vgSukgZejqL9xMofElkIyLY",
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log("error", error));
  }, []);

  const onSearch = query => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&type=video&key=AIzaSyBWHiRMxAh8vgSukgZejqL9xMofElkIyLY`,
      requestOptions
    )
      .then(response => response.json())
      .then(result =>
        result.items.map(item => ({ ...item, id: item.id.videoId }))
      )
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
