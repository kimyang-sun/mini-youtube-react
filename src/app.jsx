import "./app.css";
import React, { useEffect, useState } from "react";
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

  return (
    <React.Fragment>
      <VideoList videos={videos}></VideoList>
    </React.Fragment>
  );
};

export default App;
