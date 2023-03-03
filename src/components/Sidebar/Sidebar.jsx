import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { Button } from "@material-ui/core";

const Sidebar = () => {
    return (
        <div className="sidebar">
        <h1>Sidebar</h1>
        <SidebarOption text="Twitter" Icon={TwitterIcon}/>
        <SidebarOption text="Home" Icon={HomeIcon}/>
        <SidebarOption text="Explore" Icon={ExploreIcon}/> 
        <SidebarOption text="Notifications" Icon={NotificationsIcon}/>
        <SidebarOption text="Messages" Icon={MailOutlineIcon}/>
        <SidebarOption text="Bookmarks" Icon= {BookmarkBorderIcon}/>
        <SidebarOption text="Lists" Icon={ListAltIcon}/>
        <SidebarOption text="Profile" Icon={PermIdentityIcon}/>
        <SidebarOption text="More" Icon={MoreHorizIcon}/>
        </div>
    );
};

export default Sidebar;