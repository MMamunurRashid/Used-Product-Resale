import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Loading from "../../Shared/Loading/Loading";
import useTitle from "../../../hooks/useTitle";

const stripePromise = loadStripe(process.env.REACT_APP_Stripe_PK);
const Payment = () => {
  useTitle("Payment");

  const booking = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  // console.log(booking);

  return (
    <div>
      <h3 className="text-3xl">Payment for {booking.productName}</h3>
      <p className="text-xl">
        Please pay <strong>{booking.productPrice} BDT</strong> for your wanted
        product
      </p>
      <div className="w-1/2 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
