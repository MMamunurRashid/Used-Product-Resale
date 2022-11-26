import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const DisplayErrorElement = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <p className="text-red-600">Something is Wrong</p>
      <p className="text-red-600">{error}</p>
      <h1 className="text-3xl">
        Please{" "}
        <button onClick={handleLogout} className="btn">
          Logout
        </button>{" "}
        and Login again.
      </h1>
    </div>
  );
};

export default DisplayErrorElement;
