import axios from "axios"; //make API calls(intercept)

const url = "http://localhost:5000/posts";

export const fetchPosts=()=>axios.get(url)