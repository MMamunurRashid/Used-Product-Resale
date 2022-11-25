import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  const { googleLogin, createUser, updateUser } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [signupError, setSignupError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = (data) => {
    console.log(data);

    const email = data.email;
    const password = data.password;
    const option = data.option;

    setSignupError("");
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        //console.log(user);
        toast.success("Your Registration Successful!!");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUserInDb(data.name, email, option);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => {
        //console.log(err);
        setSignupError(err.message);
        toast.error(`${err.message}`);
      });
  };

  const handleGoogleLogin = () => {
    console.log("click");
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const option = "Buyer";
        saveUserInDb(user.displayName, user.email, option);
        toast.success("Your Registration Successful!!");
      })
      .catch((err) => {
        console.error(err);
        setSignupError(err.message);
        toast.error(`${err.message}`);
      });
  };

  const saveUserInDb = (name, email, option) => {
    const verify = "unverified";
    const user = { name, email, option, verify };
    fetch(`http://localhost:5000/users`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save-user", data);
        //    setCreatedUserEmail(email);
      });
  };

  return (
    <div>
      <div className="h-[900px] flex justify-center items-center ">
        <div className="w-96 p-7">
          <h2 className="text-xl sm:text-5xl text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(handleSignup)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: true,
                })}
                required
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                {...register("email", {
                  required: true,
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be 8 characters or longer",
                  },
                  pattern: {
                    value: /(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have  number and special characters",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <select
              {...register("option", {
                required: true,
              })}
              className="select select-bordered w-full max-w-xs mt-3"
            >
              <option selected>Buyer</option>
              <option>Seller</option>
            </select>
            <input
              className="btn btn-accent w-full mt-3"
              value="Sign Up"
              type="submit"
            />
            {signupError && <p className="text-red-600">{signupError}</p>}
          </form>
          <p>
            Already have an account?
            <Link className="text-red-600 hover:text-accent" to="/login">
              Please Login.
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full"
          >
            <FcGoogle className="w-8 h-8 mr-3" /> CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
