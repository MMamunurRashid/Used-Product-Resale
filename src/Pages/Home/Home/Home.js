import React from "react";
import useTitle from "../../../hooks/useTitle";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Navbar></Navbar>
      <h1>Home</h1>
      <Footer></Footer>
    </div>
  );
};

export default Home;
