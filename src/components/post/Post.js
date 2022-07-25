import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

function Post({ displayName, username, verified, text, image, avatar }) {
  avatar = "https://i.dlpng.com/static/png/6815962_preview.png";
  image =
    "https://fcit.usf.edu/matrix/wp-content/uploads/2017/01/DanceBot-3-Med.gif";

  return (
    <div className={"post"}>
      <div className="post__avatar">
        <Avatar src={avatar} alt="profile" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Jason Breedlove{" "}
              <span className={"post__headerSpecial"}>
                <VerifiedIcon className={"post__badge"} />
              </span>
            </h3>
          </div>
          <div className={"post__headerDescription"}>
            <p>I challenge you to build a Twitter clone with react</p>
          </div>
        </div>
        <img src={image} alt={"robot-gif"} />
        <div className={"post__footer"}>
          <ChatBubbleOutlineIcon fontSize={"small"} />
          <RepeatIcon fontSize={"small"} />
          <FavoriteBorderIcon fontSize={"small"} />
          <PublishIcon fontSize={"small"} />
        </div>
      </div>
    </div>
  );
}

export default Post;
