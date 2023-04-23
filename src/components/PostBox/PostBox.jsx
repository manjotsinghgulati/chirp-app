import React, { useState } from "react";
import "./PostBox.css";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { db } from "../../firebase"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"; 

function PostBox() {
  const [postMessage, setPostMessage] = useState("");
  const [postImage, setPostImage] = useState("");

  const sendPost = (e) => {
    e.preventDefault();
      setDoc(doc(db, "posts", postMessage), {
          displayName: "Manjot Singh",
          username: "manjotsingh",
          verified: true,
          text: postMessage,
          image: postImage,
          avatar: "https://pbs.twimg.com/profile_images/1576549820034322432/-C25AT9Z_400x400.jpg",
          createdAt: serverTimestamp()
    });

    setPostMessage("");
    setPostImage("");
  };

  return (
    <div className="postBox">
      <form>
        <div className="postBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1576549820034322432/-C25AT9Z_400x400.jpg" />
          <div className="postBox__postFrom">
          <input
            onChange={(e) => setPostMessage(e.target.value)}
            value={postMessage}
            className="postBox__postInput"
            placeholder="What's happening?"
            type="text"
          />
           <input
          value={postImage}
          onChange={(e) => setPostImage(e.target.value)}
          className="postBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
          />
          </div>
        </div>
       

        <Button
          onClick={sendPost}
          type="submit"
          className="postBox__postButton"
        >
          Post
        </Button>
      </form>
    </div>
  );
}

export default PostBox;