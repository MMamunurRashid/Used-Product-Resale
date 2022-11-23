import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Categories from "../HomeCategories/HomeCategories";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
    </div>
  );
};

export default Home;
