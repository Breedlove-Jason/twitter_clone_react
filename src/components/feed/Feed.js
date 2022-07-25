import React from "react";
import "./Feed.css";
import TweetBox from "../tweet-box/TweetBox.js";
import Post from "../post/Post";

function Feed(props) {
  return (
    <div className={"feed"}>
      <div className="feed__header">
        <TweetBox />
      </div>
      <Post />
    </div>
  );
}

export default Feed;
