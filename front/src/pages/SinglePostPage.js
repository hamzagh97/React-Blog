import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Modal from "../components/UI/Modal";
import axios from "axios";

const SinglePostPage = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  const params = useParams();

  const fetchItemsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios
        .get(`http://localhost:3009/posts/${params.postId}`)
        .then((response) => response.data);

      setPost(response);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [params.postId]);

  useEffect(() => {
    fetchItemsHandler();
  }, [fetchItemsHandler]);

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:3009/posts/${id}`)
      .then((response) => console.log(response));
    setTimeout(() => {
      window.location.replace(`/`);
    }, 1000);
  };

  const showModalHandle = () => {
    setShowModal(true);
  };

  const closeModalHandle = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal delete={handleDelete} close={closeModalHandle} id={post.id} />
      )}
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <div className="mx-auto mt-10 flex max-w-3xl items-center justify-between">
            <div className="flex items-center space-x-5">
              <span
                className="
                cursor-pointer rounded-full border border-violet-400 p-1.5 uppercase hover:border-violet-900"
              >
                ad
              </span>
              <div className="flex flex-col">
                <span className="text-xl font-black capitalize text-black">
                  name
                </span>
                <span className="text-sm">
                  posted on <span className="font-black">{post.date}</span>{" "}
                </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="rounded border border-none py-1.5 px-2 font-bold capitalize text-black hover:bg-blue-600 hover:text-white">
                edit
              </button>
              <button
                className="rounded border border-none py-1.5 px-2 font-bold capitalize text-black hover:bg-red-600 hover:text-white"
                onClick={showModalHandle}
              >
                delete
              </button>
            </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center font-poppins text-5xl font-black text-black sm:justify-start">
            {post.title}
          </div>

          <div
            className="
            mx-auto mt-20 mb-10 h-full max-w-3xl border border-gray-300 bg-white p-10"
          >
            <div className="font-black text-black outline-none">
              {post.content}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SinglePostPage;
