import React from "react";
import Banner from "../components/banner/Banner";
import Posts from "../components/posts/Posts";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Banner />
      <Posts />
    </div>
  );
};

export default Home;
