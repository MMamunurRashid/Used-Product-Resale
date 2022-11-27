import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";

const CustomerMessage = () => {
  const [read, setRead] = useState(false);
  const url = `http://localhost:5000/messages`;
  const {
    data: messages = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });

  const handleRead = (id) => {
    setRead(true);
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-3xl">All Seller</h1>
      <table className="table sm:w-full table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>message</th>
            <th>mark as</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, idx) => (
            <tr key={message._id}>
              <th>{idx + 1}</th>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.message}</td>
              <td>
                <button
                  onClick={() => handleRead(message._id)}
                  className="btn btn-sm"
                  disabled={read}
                >
                  Done
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerMessage;
