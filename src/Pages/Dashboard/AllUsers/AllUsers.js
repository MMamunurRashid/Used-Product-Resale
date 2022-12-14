import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";
import Loading from "../../Shared/Loading/Loading";

const AllUsers = () => {
  useTitle("All Users");

  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://recycle-clothes-server.vercel.app/users",
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`https://recycle-clothes-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successful");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-3xl">All Users</h1>
      <table className="table sm:w-full table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Make Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user._id}>
              <th>{idx + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user?.role ? user.role : user.option}</td>
              <td>
                {user?.role !== "admin" && (
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-xs btn-primary"
                  >
                    Make Admin
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
