import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };
  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {user?.email ? (
        <li>
          <Link to="/dashboard/my-order">Dashboard</Link>
        </li>
      ) : (
        <></>
      )}

      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        {user?.email ? (
          <Link onClick={handleLogout} className="btn btn-ghost">
            Logout
          </Link>
        ) : (
          <Link className="btn btn-ghost" to="/login">
            Login
          </Link>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl md:text-3xl font-serif font-semibold"
          >
            Recycle Clothes
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0 ">{menuItem}</ul>
        </div>

        <div className="navbar-end">
          <label
            htmlFor="dashboard-drawer"
            tabIndex={2}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
