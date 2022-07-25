import React from "react";
import "./Widgets.css";
import {
  TwitterTweetEmbed,
  TwitterShareButton,
  TwitterTimelineEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets(props) {
  return (
    <div className={"widgets"}>
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1551235759130042368"} />
        <TwitterTimelineEmbed
          sourceType={"profile"}
          screenName={"jbreedloveDev"}
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
