import React from "react";
import { format } from "date-fns/esm";
import verified from "../../../assets/6364343.png";
import unverified from "../../../assets/png-transparent-blue-check-mark-area-circle-symbol-thumbnail.png";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import useTitle from "../../../hooks/useTitle";

const CategoryCard = ({ product, setProduct }) => {
  const navigation = useNavigation();
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
  useTitle(`Category ${categories_id}`);

  const url = `https://recycle-clothes-server.vercel.app/sellerquery?email=${email}`;
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
    fetch(`https://recycle-clothes-server.vercel.app/report-product/${id}`, {
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
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div className="my-5 ">
      {product?.status !== "sold" && (
        <div className="card  card-compact sm:w-96 bg-base-100 shadow-xl ">
          <figure>
            <img
              className="h-60 w-full hover:cursor-pointer  transition ease-in-out delay-100 hover:-translate-y-[784px, 1446px] hover:scale-125  duration-500 hover:opacity-70 hover:bg-[rgba(35,87,132,.5)] transition-transform"
              src={productPhoto}
              alt="Shoes"
            />
          </figure>

          <div className="card-body">
            <h2 className="text-2xl font-bold font-serif">{productName}</h2>
            <p className="text-xl font-semibold">Price : {sellingPrice} BDT</p>
            <div tabIndex={0} className="collapse  font-mono">
              <div className="collapse-title text-lg font-medium">
                Click here to see product all details
              </div>
              <div className="collapse-content text-lg">
                <p>Product Category: {categories_id}</p>
                <p>Buying Price : {buyingPrice} BDT</p>
                <p>Selling Price : {sellingPrice} BDT</p>
                <p>Condition : {condition}</p>
                <p>Duration of Used : {duration}</p>
                <p>Meeting Location: {meetingLocation}</p>
              </div>
            </div>
          </div>
          <h1 className="text-xl text-center">Seller Information </h1>
          <div className="flex justify-evenly mx-3 font-serif">
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
