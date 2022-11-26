import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const BookingModal = ({ product, setProduct }) => {
  const { user } = useContext(AuthContext);
  console.log(product);
  const {
    categories_id,
    productName,
    _id,
    sellingPrice,
    productPhoto,

    meetingLocation,
    phone: sellerPhone,
    name: sellerName,
    email: sellerEmail,
  } = product;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      bookingDate: new Date(),
      productId: _id,
      categories_id,
      productPhoto,
      productName: productName,
      productPrice: sellingPrice,
      sellerName: sellerName,
      sellerEmail: sellerEmail,
      sellerPhone: sellerPhone,
      name,
      email,
      phone,
      location,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.acknowledged) {
          setProduct(null);
          toast.success("Booking Confirmed");
        } else {
          toast.error(data.message);
          setProduct(null);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <p>Product Information</p>
          <h3 className="text-lg font-bold">Product Name: {productName}</h3>
          <p>Price: {sellingPrice}</p>
          <p>Meeting Location: {meetingLocation}</p>

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <p>Your Information</p>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              disabled
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              defaultValue={user?.email}
              disabled
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Location where you can meet"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-primary w-full text-white"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
