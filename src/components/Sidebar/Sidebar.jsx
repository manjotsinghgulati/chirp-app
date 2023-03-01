import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Sidebar = () => {
    return (
        <div className="sidebar">
        <h1>Sidebar</h1>
        <SidebarOption text="Twitter" Icon={TwitterIcon}/>
        <SidebarOption text="Home" Icon={HomeIcon}/>
        <SidebarOption text="Explore" Icon={ExploreIcon}/> 
        <SidebarOption text="Notifications" Icon={NotificationsIcon}/>
        </div>
    );
};

export default Sidebar;