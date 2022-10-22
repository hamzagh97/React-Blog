import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = (props) => {
  return (
    <div className="relative">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
