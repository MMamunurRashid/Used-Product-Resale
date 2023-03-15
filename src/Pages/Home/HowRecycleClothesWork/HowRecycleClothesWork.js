import React from "react";
import profile from "../../../assets/How work/profile.gif";
import booking from "../../../assets/How work/booking.gif";
import payment from "../../../assets/How work/mobile-payment.gif";
import delivery from "../../../assets/How work/delivery.gif";
const HowRecycleClothesWork = () => {
  return (
    <div className="my-16">
      <h1 className="text-2xl text-center font-serif font-bold">
        How Recycle Clothes Work
      </h1>
      <div className="flex flex-col  md:flex-row  justify-between items-center mx-10 text-center">
        <div className="flex flex-col items-center shadow-lg p-7 rounded-lg transition ease-in-out delay-100 hover:-translate-y-[784px, 1446px] hover:scale-110  duration-500  transition-transform">
          <img className="w-40 " src={profile} alt="" />
          <p className="font-serif text-xl">
            Create your own
            <br /> Seller or Buyer Account
          </p>
        </div>
        <div className="flex flex-col items-center shadow-lg p-7 rounded-lg transition ease-in-out delay-100 hover:-translate-y-[784px, 1446px] hover:scale-110  duration-500  transition-transform">
          <img className="w-40" src={booking} alt="" />
          <p className="font-serif text-xl">
            Post your product to sell
            <br /> Book your desire product.
          </p>
        </div>
        <div className="flex flex-col items-center shadow-lg p-7 rounded-lg transition ease-in-out delay-100 hover:-translate-y-[784px, 1446px] hover:scale-110  duration-500  transition-transform">
          <img className="w-40" src={payment} alt="" />
          <p className="font-serif text-xl">
            Take your payment
            <br /> Make payment for your desire product.
          </p>
        </div>
        <div className="flex flex-col items-center shadow-lg p-7 rounded-lg transition ease-in-out delay-100 hover:-translate-y-[784px, 1446px] hover:scale-110  duration-500  transition-transform">
          <img className="w-40" src={delivery} alt="" />
          <p className="font-serif text-xl">
            Place your delivery
            <br /> Be ready to take you product.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowRecycleClothesWork;
