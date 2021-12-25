import axios from "axios"; //make API calls(intercept)

const url = 'http://localhost:5000/posts'; //calling back api

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url,newPost);
