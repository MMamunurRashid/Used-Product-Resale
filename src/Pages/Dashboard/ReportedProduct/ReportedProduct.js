import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";
import Loading from "../../Shared/Loading/Loading";

const ReportedProduct = () => {
  useTitle("Reported Product");

  const {
    data: reportedProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["reportedProducts"],
    queryFn: async () => {
      const res = await fetch(
        "https://recycle-clothes-server.vercel.app/reported-product",
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleDelete = (id) => {
    //   console.log("click", id);
    fetch(`https://recycle-clothes-server.vercel.app/reported-product/${id}`, {
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
      <h1 className="text-3xl mb-3"> Reported Products</h1>
      {reportedProducts.length ? (
        <table className="table sm:w-full table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Product Name</th>
              <th>Buying Price</th>
              <th>Selling Price</th>
              <th>Post Date</th>
              <th>Seller Name</th>
              <th>Delete Product</th>
            </tr>
          </thead>
          <tbody>
            {reportedProducts.map((product, idx) => (
              <tr key={product._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="rounded w-14 h-14">
                      <img src={product.productPhoto} alt="" />
                    </div>
                  </div>
                </td>
                <td>{product.productName}</td>
                <td>{product.buyingPrice}</td>
                <td>{product.sellingPrice}</td>
                <td>{format(new Date(product.postDate), "ppP")}</td>
                <td>{product.name}</td>
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
      ) : (
        <h1 className="text-3xl text-center">Not reported product yet!!</h1>
      )}
    </div>
  );
};

export default ReportedProduct;
