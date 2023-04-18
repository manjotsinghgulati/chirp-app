import React from "react";
import "./Feed.css";
import PostBox from "../PostBox/PostBox"
import Post from "../Post/Post"

const Feed = () => {
    let api = "https://dummyjson.com/posts"
    const [posts, setPosts] = React.useState([]);
    const fetchApi = fetch(api)
    .then((response) => response.json())
    .then((data) => setPosts(data))
    .catch((error) => console.log(error));


    return (
    <div className="feed">
        <div className="feed__header">
            <h2>Home</h2>
        </div>

      <PostBox />

      {/* <FlipMove> */}
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
      {/* </FlipMove> */}
    </div>
    );
}

export default Feed;