import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const MyProduct = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/my-product?email=${user?.email}`;
  const { data: products = [] } = useQuery({
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
              <td>Unsold</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProduct;
