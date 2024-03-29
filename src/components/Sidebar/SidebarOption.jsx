import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ active, text, Icon }) => {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
         <Icon />
         <p>{text}</p>
        </div>
    );
}

export default SidebarOption;