import React, { useState } from "react";
import { GenerateAIImage, createPost } from "../api";
import {useNavigate} from 'react-router-dom';
import { AutoAwesome, CloudUpload } from "@mui/icons-material";
import { toast } from 'react-toastify';

const CreatePost = () => {
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const navigate = useNavigate();

 // Generate AI Image
const generateImageFun = async () => {
  if (!post.prompt) return;
  try {
    setGenerateImageLoading(true);
    const { data } = await GenerateAIImage({ prompt: post.prompt });

    // backend sends base64 image
    const imageUrl = `data:image/png;base64,${data.photo}`;
    setPost({ ...post, photo: imageUrl });

  } catch (error) {
    console.error("Error generating image:", error);
    toast.error("Failed to generate image. Try again.");
  } finally {
    setGenerateImageLoading(false);
  }
};
  // Create Post
  const createPostFun = async () => {
  if (!post.name || !post.prompt || !post.photo) return;
  try {
    setCreatePostLoading(true);
    await createPost(post);
    toast.success("Post created successfully!");
    navigate("/");
    setPost({ name: "", prompt: "", photo: "" });
  } catch (error) {
    console.error("Error creating post:", error);
    toast.error("Failed to create post. Try again.");
  } finally {
    setCreatePostLoading(false);
  }
};
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Left Side */}
      <div className="flex flex-col justify-center p-4 w-full">
        <h1 className="font-bold text-2xl p-2">Generate Image with prompt</h1>
        <p className="font-semibold p-2">
          Write your prompt according to the image you want to generate!
        </p>

        {/* Author Input */}
        <label htmlFor="input" className="p-2">
          Author
        </label>
        <input
          type="text"
          placeholder="Enter your name..."
          className="p-2 ml-2 border rounded-lg border-blue-400 
                     hover:border-blue-600 hover:shadow-sm hover:shadow-blue-500 
                     focus:outline-none focus:ring-0"
          value={post.name}
          onChange={(e) => setPost({ ...post, name: e.target.value })}
        />

        {/* Prompt Textarea */}
        <label htmlFor="textarea" className="p-2">
          IMAGE PROMPT
        </label>
        <textarea
          placeholder="Write a detailed prompt about the image..."
          className="p-2 ml-2 border rounded-lg border-blue-400 
                     hover:border-blue-600 hover:shadow-sm hover:shadow-blue-500 
                     focus:outline-none focus:ring-0"
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
        ></textarea>

        <p className="p-2">
          You can post the AI Generated image to showcase in the community!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 p-2">
  {/* Generate Button */}
  <button
    disabled={post.prompt === ""}
    onClick={generateImageFun}
    className={`bg-blue-500 p-3 rounded-xl w-full sm:w-64 text-white font-semibold
                flex items-center justify-center gap-2
                hover:bg-blue-600 disabled:opacity-50
                transform transition-transform duration-300 hover:scale-105 active:scale-95
                hover:shadow-lg disabled:hover:scale-100
                ${generateImageLoading ? "animate-pulse" : ""}`}
  >
    <AutoAwesome className="text-white mb-0.5 transition-transform duration-300 group-hover:rotate-12" />
    {generateImageLoading ? "Generating..." : "Generate Image"}
  </button>

  {/* Post Button */}
  <button
    disabled={post.name === "" || post.prompt === "" || post.photo === ""}
    onClick={createPostFun}
    className={`bg-violet-500 p-3 rounded-xl w-full sm:w-64 text-white font-semibold
                flex items-center justify-center gap-2
                hover:bg-violet-600 disabled:opacity-50
                transform transition-transform duration-300 hover:scale-105 active:scale-95
                hover:shadow-lg disabled:hover:scale-100
                ${createPostLoading ? "animate-pulse" : ""}`}
  >
    <CloudUpload className="text-white transition-transform duration-300 group-hover:-translate-y-1" />
    {createPostLoading ? "Posting..." : "Post Image"}
  </button>
</div>

      </div>

      {/* Right Side */}
      <div
  className="flex border-2 m-5 border-dashed border-yellow-500 
             rounded-3xl justify-center items-center text-center p-6 min-h-60"
>
  {generateImageLoading ? (
    <div className="flex flex-col items-center gap-2">
      {/* Spinner */}
      <div className="w-10 h-10 border-4 border-orange-500 border-dashed rounded-full animate-spin"></div>
      <p className="text-orange-400 font-semibold animate-pulse">Generating...</p>
    </div>
  ) : post?.photo ? (
    <img
      src={post.photo}
      alt="Generated"
      className="rounded-lg max-h-80 object-contain"
    />
  ) : (
    <p className="text-gray-400 animate-pulse">Write a prompt to generate image</p>
  )}
</div>

    </div>
  );
};

export default CreatePost;
