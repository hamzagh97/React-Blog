import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleOnChangeText = (e) => {
    setcontent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await axios
      .post("http://localhost:3009/posts", {
        id: Math.floor(Math.random() * 1000),
        title: title,
        content: content,
        date: new Date(Date.now()).toLocaleDateString(),
      })
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        setTimeout(() => {
          window.location.replace(`post/${response.data.id}`);
        }, 1000);
      });
  };

  return (
    <>
      <p className="mx-auto mt-10 flex max-w-3xl justify-center font-poppins font-black capitalize text-black md:justify-start">
        create post
      </p>

      <div
        className="
        mx-auto mt-5 mb-10 h-full max-w-3xl rounded-xl border border-gray-300 bg-white px-14 pt-14"
      >
        <form action="" onSubmit={handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="New post title here..."
            className="rounded-mde w-full p-3 font-poppins text-4xl font-black outline-none"
            onChange={handleOnChangeTitle}
          />
          <textarea
            name="body"
            id=""
            cols="30"
            rows="17"
            placeholder="Write your post here..."
            className="outline-non my-10 h-full  w-full animate-fadeIn font-black text-black outline-none"
            onChange={handleOnChangeText}
          />
          <hr />
          <div className="flex justify-center py-5 md:justify-start">
            <button
              className="
            rounded border border-violet-900 bg-violet-600 px-5 py-3 font-black capitalize text-white outline-none hover:bg-violet-900"
            >
              {isLoading ? "loading..." : "publish"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPost;
