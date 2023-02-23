import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import TwitterIcon from "@mui/icons-material/Twitter";

const Sidebar = () => {
    return (
        <div className="sidebar">
        <h1>Sidebar</h1>
        <TwitterIcon />
        </div>
    );
};

export default Sidebar;