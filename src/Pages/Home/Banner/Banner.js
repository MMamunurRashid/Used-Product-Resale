import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/4v.jpg";
const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="flex justify-end"
    >
      <div className="md:w-1/2 my-10">
        <h1 className="text-white md:text-5xl text-3xl mx-3 text-bold font-serif  ">
          Recycle Clothes
        </h1>
        <h1 className="text-white md:text-4xl text-xl mx-3 text-bold font-mono mt-3">
          Classified platform, a Marketplace Connecting Buyers and Sellers
        </h1>
        <p className="text-white hidden md:block md:text-xl mt-3">
          Recycle Clothes is the fastest used products online marketplace in
          Bangladesh. Start buying and selling today! Make shopping SIMPLE,
          SECURE and FAST on the largest used products marketplace in
          Bangladesh. Discover what you need and sell all sorts of products in
          our simple yet powerful platform.
        </p>
        <Link
          to="/sign-up"
          className="btn btn-primary hover:btn-info mt-3 px-8 mx-3"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="btn btn-primary hover:btn-info mt-3 ml-3 px-10"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Banner;
