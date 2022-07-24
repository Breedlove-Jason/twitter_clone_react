import React from "react";
import "./Sidebar.css";
import "./SidebarOption.js";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ListIcon from "@mui/icons-material/List";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Sidebar(props) {
  return (
    <div className={"sidebar"}>
      <TwitterIcon />
      <SidebarOption Icon={HomeIcon} text={"Home"} />
      <SidebarOption Icon={TagIcon} text={"Explore"} />
      <SidebarOption Icon={NotificationsIcon} text={"Notifications"} />
      <SidebarOption Icon={EmailIcon} text={"Messages"} />
      <SidebarOption Icon={BookmarkIcon} text={"Bookmarks"} />
      <SidebarOption Icon={ListIcon} text={"Lists"} />
      <SidebarOption Icon={PersonIcon} text={"Profile"} />
      <SidebarOption Icon={MoreHorizIcon} text={"More"} />
    </div>
  );
}

export default Sidebar;
