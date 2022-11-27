import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useContext } from "react";
import { Link, useNavigation } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  const url = `http://localhost:5000/my-order?email=${user.email}`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <div className="">
      <h1 className="text-3xl mb-3"> My Order</h1>
      {bookings.length ? (
        <table className="table sm:w-full table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Booking Date</th>

              <th>payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, idx) => (
              <tr key={booking._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="rounded w-14 h-14">
                      <img src={booking.productPhoto} alt="" />
                    </div>
                  </div>
                </td>
                <td>{booking.productName}</td>
                <td>{booking.productPrice}</td>
                <td>{format(new Date(booking.bookingDate), "ppP")}</td>

                <td>
                  {booking.paid ? (
                    <>
                      <button className="btn btn-primary btn-sm btn-disabled">
                        Paid
                      </button>
                    </>
                  ) : (
                    <Link
                      to={`/dashboard/payment/${booking._id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Pay
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <h1 className="text-3xl text-center">
            You don't place any order yet!!
          </h1>
        </>
      )}
    </div>
  );
};

export default MyOrder;
