import React from "react";
import useTitle from "../../../hooks/useTitle";
import AdvertiseProduct from "../AdvertiseProduct/AdvertiseProduct";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Categories from "../HomeCategories/HomeCategories";
import HowRecycleClothesWork from "../HowRecycleClothesWork/HowRecycleClothesWork";
import Offer from "../Offer/Offer";
import Voucher from "../Offer/Voucher";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <AdvertiseProduct></AdvertiseProduct>
      <HowRecycleClothesWork></HowRecycleClothesWork>
      <Offer />
      <Voucher />
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
