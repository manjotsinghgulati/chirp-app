import React, { useState, useEffect } from "react";
import "./Feed.css";
import PostBox from "../PostBox/PostBox";
import Post from "../Post/Post";

const Feed = () => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
    
  //   let api = "https://dummyjson.com/posts/5";
  //   fetch(api)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // }, []);


            

  let posts = [
    {
      "id": 1,
      "text": "My first post on this new platform",
    },
    {
      "id": 2,
      "text": "This is post 2",
    },
    {
      "id": 3,
      "text": "This is post 3",
    },
    {
      "id": 4,
      "text": "This is post 4",
    },
    {
      "id": 5,
      "text": "This is post 5",
    }
]

  return (
    <div className="feed">
      <div className="feed__header">
        <h1>Home</h1>
      </div>
      <PostBox />
      {posts.map((post) => (
        <Post
          key={post.id}
          displayName="Manjot Singh"
          username="manjotsingh" 
          verified={true}
          text={post.text}
          image="https://randomwordgenerator.com/img/picture-generator/chair-1840011_640.jpg"
          avatar="https://pbs.twimg.com/profile_images/1576549820034322432/-C25AT9Z_400x400.jpg"
        />
      ))}
    </div>
  );
};

export default Feed;