import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { useNavigation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AllSeller = () => {
  const navigation = useNavigation();
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/seller", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });

  const handleDelete = (id) => {
    // console.log("click", id);
    fetch(`http://localhost:5000/seller/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Seller deleted successfully");
          refetch();
        }
      });
  };
  const handleVerify = (id) => {
    // console.log("click", id);
    fetch(`http://localhost:5000/users/seller/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(` Seller Verification Successful`);
        }
      });
  };
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div>
        <h1 className="text-3xl">All Seller</h1>
        <table className="table sm:w-full table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
              <th>Verify</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, idx) => (
              <tr key={seller._id}>
                <th>{idx + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(seller._id)}
                    className="btn btn-sm"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  {seller?.verify !== "verified" ? (
                    <button
                      onClick={() => handleVerify(seller._id)}
                      className="btn btn-sm"
                    >
                      Verify
                    </button>
                  ) : (
                    seller.verify
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllSeller;
