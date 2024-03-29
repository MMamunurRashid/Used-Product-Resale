import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import Loading from "../../Shared/Loading/Loading";

const MyProduct = () => {
  useTitle("My-Product");

  const { user } = useContext(AuthContext);

  const url = `https://recycle-clothes-server.vercel.app/my-product?email=${user?.email}`;
  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleAdvertise = (id) => {
    // console.log("click", id);
    fetch(`https://recycle-clothes-server.vercel.app/advertise/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(`Your Product Advertised`);
          if (isLoading) {
            return <Loading></Loading>;
          }
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    console.log("click", id);
    fetch(`https://recycle-clothes-server.vercel.app/delete-product/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Product deleted successfully`);
        }
      });
  };
  return (
    <div className="">
      <h1 className="text-3xl mb-3"> My Products</h1>
      <table className="table sm:w-full table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Buying Price</th>
            <th>Selling Price</th>
            <th>Post Time Date</th>
            <th>Status</th>
            <th>Advertise</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <tr key={product._id}>
              <th>{idx + 1}</th>
              <td>{product.productName}</td>
              <td>{product.buyingPrice}</td>
              <td>{product.sellingPrice}</td>
              <td>{format(new Date(product.postDate), "ppP")}</td>
              <td>{product?.status === "sold" ? product.status : "Unsold"}</td>
              {product?.status !== "advertise" && product.status !== "sold" ? (
                <td>
                  <button
                    onClick={() => handleAdvertise(product._id)}
                    className="btn btn-xs btn-primary"
                  >
                    Advertise
                  </button>
                </td>
              ) : (
                <td>
                  <button className="btn btn-xs disabled">Advertised</button>
                </td>
              )}
              <td>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn btn-xs btn-primary"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProduct;
