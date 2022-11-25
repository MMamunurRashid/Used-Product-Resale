import React from "react";
import { format } from "date-fns/esm";

const CategoryCard = ({ product }) => {
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
    phone,
    name,
    email,
    photoURL,
  } = product;
  return (
    <div>
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
        <div className="flex justify-between mx-3">
          <div className="avatar">
            <div className="w-14 h-14 rounded-full">
              <img src={photoURL} alt="" />
            </div>
          </div>
          <div className="">
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
          </div>
          <p>{postDate}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
