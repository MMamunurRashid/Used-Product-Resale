import React from "react";
import { Link } from "react-router-dom";
import offer from "../../../assets/offer.gif";
import { FiLogIn } from "react-icons/fi";

const Offer = () => {
  return (
    <div>
      <div className="ml-0 md:ml-32">
        <p className="text-2xl font-mono">Special Offer!!!!!!!!!!</p>
        <h1 className="text-3xl font-bold font-serif">50% off for New Buyer</h1>
      </div>
      <div className="flex flex-col  md:flex-row my-10 justify-between">
        <img src={offer} alt="" />
        <div>
          <h1 className="text-2xl font-serif mr-20">
            <small className="text-4xl font-serif">
              It's a Special Offer for our new Buyer.
            </small>{" "}
            <br />
            If you are a new Buyer of <strong>
              Recycle Clothes
            </strong> <br /> You have opportunity to buy a product at 50% off!!!
          </h1>
          <Link to="/sign-up">
            <button className="btn btn-outline hover:btn-primary mt-10 text-2xl">
              Register Here <FiLogIn className="w-7 h-7 ml-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
