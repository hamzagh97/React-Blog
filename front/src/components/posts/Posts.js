import React from "react";
import Post from "./Post";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchItemsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios
        .get("http://localhost:3009/posts")
        .then((response) => response.data);

      setPosts(response.reverse());
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchItemsHandler();
  }, [fetchItemsHandler]);

  return (
    <section className="my-10">
      <p className="flex justify-center font-poppins text-lg font-black capitalize text-black md:justify-start">
        recent posts
      </p>
      <div className="my-3 mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post, index) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            date={post.date}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="
        mt-10 place-content-center rounded-lg border bg-violet-600 py-5 px-10 text-xl font-black capitalize text-white outline-none hover:bg-violet-900"
        >
          read more >
        </button>
      </div>
    </section>
  );
};

export default Posts;
