// src/api/index.js

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

// Get all posts
export const GetPosts = async () => await API.get("/post/");

// Create a new post
export const createPost = async (data) => await API.post("/post/", data);

// Generate AI image
export const GenerateAIImage = async (data) => await API.post("/generateImage/", data);
