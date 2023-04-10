import React from "react";
import "./TweetBox.css";


const TweetBox = () => {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <input placeholder="What's happening?" type="text" />
                </div>
            </form>
        </div>
    );
}

export default TweetBox;