import React, { useState, useEffect } from "react";
import "./Notifications.css";
import Post from "../Post/Post";
import { db } from "../../firebase"
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    const q = query(collection(db, "posts"), orderBy("createdAt" , "desc"));
    onSnapshot(q, (postData) => {
      setPosts(postData.docs.map((doc) => doc.data()))
    })
  }

  useEffect(() => { 
    fetchPosts();
  }, [])

  return (
    <div className="feed">
      <div className="feed__header">
        <h1>Notifications</h1>
      </div>
      <FlipMove> 
        {posts.map((post) => (
            <Post
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified} 
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          ))}
      </FlipMove>
    </div>
  );
};

export default Feed;