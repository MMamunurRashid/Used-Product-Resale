import React from "react";
import toast from "react-hot-toast";
import img from "../../../assets/44c6e18ebf6df6d0bd64d8e7d09df6aa.jpg";

const ContactUs = () => {
  const handleContact = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    const name = form.name.value;

    const customerMessage = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    fetch("http://localhost:5000/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(customerMessage),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(
          "Thanks for your message, stay connected you us. Have a good day!!"
        );
      });
  };
  return (
    <div
      className="text-center text-white font-serif opacity-90 my-5"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="py-10 ">
        <div>
          <h3 className="text-xl ">Contact Us</h3>
          <h1 className="text-4xl ">Stay connected with us</h1>
          <p className="text-xl">
            If you have any message, suggestion or complain. You can give us
            your message in below.
          </p>
        </div>
        <div className="md:w-1/3 mx-auto mt-5 text-black">
          <form onSubmit={handleContact}>
            <input
              name="name"
              type="text"
              placeholder="Type here your Name"
              className="input input-bordered md:w-full w-11/12"
            />
            <input
              name="email"
              type="email"
              placeholder="Type here your Email"
              className="input input-bordered md:w-full w-11/12 mt-4"
            />
            <input
              type="text"
              name="subject"
              placeholder="Type here Subject"
              className="input input-bordered md:w-full w-11/12 mt-4"
            />
            <textarea
              name="message"
              className="textarea textarea-bordered md:w-full w-11/12 mt-4"
              placeholder="Type here your Message"
            ></textarea>
            <input
              className="btn btn-secondary md:px-32 mt-5"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
