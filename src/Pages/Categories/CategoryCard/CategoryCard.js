import React from "react";
import { format } from "date-fns/esm";
import verified from "../../../assets/6364343.png";
import unverified from "../../../assets/png-transparent-blue-check-mark-area-circle-symbol-thumbnail.png";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const CategoryCard = ({ product, setProduct }) => {
  const postDate = format(new Date(product.postDate), "ppP");
  const {
    categories_id,
    productName,
    buyingPrice,
    sellingPrice,
    productPhoto,
    condition,
    duration,
    meetingLocation,
    name,
    email,
  } = product;

  const url = `http://localhost:5000/sellerquery?email=${email}`;
  const { data: sellers = [] } = useQuery({
    queryKey: ["sellers", email],
    queryFn: async () => {
      const res = await fetch(url, {});
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });

  const handleReport = (id) => {
    // console.log("click", id);
    fetch(`http://localhost:5000/report-product/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Product Reported");
        }
      });
  };

  return (
    <div>
      {product?.status !== "sold" && (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img className="h-80 w-full" src={productPhoto} alt="Shoes" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{productName}</h2>
            <p>Product Category: {categories_id}</p>
            <p>Buying Price : {buyingPrice} BDT</p>
            <p>Selling Price : {sellingPrice} BDT</p>
            <p>Condition : {condition}</p>
            <p>Duration of Used : {duration}</p>
            <p>Meeting Location: {meetingLocation}</p>
          </div>
          <h1 className="text-2xl text-center">Seller Information </h1>
          <div className="flex justify-evenly mx-3">
            <div className="avatar">
              <div className="w-7 h-7 rounded-full">
                {
                  <img
                    src={sellers?.verify === "verified" ? verified : unverified}
                    alt=""
                  />
                }
              </div>
            </div>
            <div className="">
              <h1>{name}</h1>
            </div>
            <p>{postDate}</p>
          </div>
          <div className="flex justify-between m-3">
            <div>
              <button
                onClick={() => handleReport(product._id)}
                className="btn btn-primary"
              >
                Report To Admin
              </button>
            </div>
            <div className=" ">
              <label
                onClick={() => setProduct(product)}
                htmlFor="booking-modal"
                className="btn btn-primary"
              >
                Book Now
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
