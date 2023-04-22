import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h1>Widgets</h1>
            </div>
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1609486649897144321"} />

                <TwitterShareButton
                url={"https://twitter.com/manjotgulati"}
                options={{ text: "#reactjs is awesome", via: "manjotgulati" }}
                />
            </div>
        </div>


    );
}

export default Widgets;