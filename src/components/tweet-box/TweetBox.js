import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox(props) {
  return (
    <div className={"tweetBox"}>
      <form>
        <div className="tweetBox__input">
          <Avatar src={require("./profilePic.jpg")} />
          <input
            onChange={(e) => props.setTweetMessage(e.target.value)}
            value={props.tweetMessage}
            placeholder={"What's happening?"}
            type={"text"}
          />
        </div>
        <input
          placeholder={"Enter image url"}
          className={"tweetBox__imageInput"}
          type={"text"}
        />
        <Button className={"tweetBox__tweetButton"}>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
