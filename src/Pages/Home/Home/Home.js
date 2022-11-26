import React from "react";
import useTitle from "../../../hooks/useTitle";
import AdvertiseProduct from "../AdvertiseProduct/AdvertiseProduct";
import Banner from "../Banner/Banner";
import Categories from "../HomeCategories/HomeCategories";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <AdvertiseProduct></AdvertiseProduct>
    </div>
  );
};

export default Home;
