import React from "react";
import Post from "./Post/Post";
import useStyles from "./style";
import { useSelector } from "react-redux";

const Posts = () => {
  const classes = useStyles();
  const posts=useSelector((state)=>state.posts)
  return (
    <div>
      <h1>Posts</h1>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
