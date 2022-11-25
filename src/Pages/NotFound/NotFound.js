import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/404-error-page-not-found.jpg";
import useTitle from "../../hooks/useTitle";
import Navbar from "../Shared/Navbar/Navbar";
const NotFound = () => {
  useTitle("Not Found");
  return (
    <>
      <Navbar></Navbar>
      <div className="text-center">
        <img src={img} alt="" />
        <Link to="/" className="btn btn-accent mt-5">
          Go Back To Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
