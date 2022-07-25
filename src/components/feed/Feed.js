import React from "react";
import "./Feed.css";
import TweetBox from "../tweet-box/TweetBox.js";
import Post from "../post/Post";

function Feed(props) {
  return (
    <div className={"feed"}>
      <div className="feed__header">
        <h2>Home</h2>
        <Post />
      </div>
      <TweetBox />
    </div>
  );
}

export default Feed;
