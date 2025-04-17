import React from "react";
import PostList, { Post } from "../components/PostList";
import useFetchWithCache from "../hooks/useFetchWithCache";

const CustomHookPage = () => {
  const {
    data: posts,
    loading,
    error,
  } = useFetchWithCache<Post[]>("https://jsonplaceholder.typicode.com/posts");

  return (
    <main style={{ padding: "2rem" }}>
      <h1>React Custom Hook with Caching</h1>

      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      {loading && <p>Loading posts...</p>}

      {!loading && posts && <PostList posts={posts} />}
    </main>
  );
};

export default CustomHookPage;
