import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";
import { GetPosts } from "../api";
import Masonry from "react-masonry-css";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPost, setFilteredPost] = useState([]);

  // Fetch posts
  const getPosts = async () => {
    try {
      setLoading(true);
      const res = await GetPosts();
      const data = res?.data?.data || [];
      setPosts(data);
      setFilteredPost(data);
    } catch (error) {
      setError(error?.response?.data?.message || "Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  // Handle search
  useEffect(() => {
    if (!search) {
      setFilteredPost(posts);
      return;
    }
    const filtered = posts.filter((post) => {
      const promptMatch = post?.prompt?.toLowerCase().includes(search.toLowerCase());
      const authorMatch = post?.author?.toLowerCase().includes(search.toLowerCase());
      return promptMatch || authorMatch;
    });
    setFilteredPost(filtered);
  }, [posts, search]);

  const breakpointColumns = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

  return (
    <>
      {/* Header */}
      <div className="mt-5 flex justify-center flex-col items-center">
  <p className="text-center text-3xl p-2 
                bg-clip-text text-transparent 
                bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 
                animate-fade-in-up drop-shadow-lg">
    Discover trending posts today!
    <br />
    <span className="font-bold text-transparent bg-clip-text 
                     bg-gradient-to-r from-orange-400 via-yellow-300 to-red-400 
                     animate-pulse drop-shadow-md">
      ⦾ Curated by AI ⦾
    </span>
  </p>
</div>


      {/* Search bar */}
      <div className="flex justify-center">
        <SearchBar
          search={search}
          handleChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Error message */}
      {error && <div className="text-red-500 text-center mt-4">{error}</div>}

      {/* Loader or Posts */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        
<Masonry
  breakpointCols={breakpointColumns}
  className="flex gap-4 mx-10 mt-6"
  columnClassName="bg-clip-padding"
>
  {filteredPost.length === 0 ? (
    <div className="text-center text-gray-400 w-full">No Posts Found</div>
  ) : (
    filteredPost
      .slice()
      .reverse()
      .map((item, index) => <ImageCard key={index} item={item} />)
  )}
</Masonry>
      )}
    </>
  );
};

export default HomePage;
