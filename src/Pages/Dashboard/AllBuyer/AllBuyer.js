import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyer = () => {
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyer"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/buyer");
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  const handleDelete = (id) => {
    // console.log("click", id);
    fetch(`http://localhost:5000/buyer/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Buyer deleted successfully`);
        }
      });
  };
  return (
    <div>
      <div>
        <h1 className="text-3xl">All Buyer</h1>
        <table className="table sm:w-full table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer, idx) => (
              <tr key={buyer._id}>
                <th>{idx + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(buyer._id)}
                    className="btn btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyer;
