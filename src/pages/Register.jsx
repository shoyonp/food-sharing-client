import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../firebase/firebase.config";
import UseTitle from "../components/UseTitle";

const Register = () => {
  const { creatUser, setUser, updateUserProfile, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  UseTitle("Register");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log(name, photo, email, password);
    setError("");
    if (password.length < 6) {
      setError("Password should be 6 characters or longer");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password should be at least one uppercase, one lowercase value"
      );
      return;
    }

    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Registerd success");
        setUser(user);
        navigate("/");
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleLogin())
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className=" min-h-screen md:mt-16 flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-md rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>

        <form onSubmit={handleSubmit} className="card-body">
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          {/* photo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            {/* password */}
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow-sm hover:from-red-600 hover:to-red-800 hover:scale-105">
              Register
            </button>
          </div>
        </form>
        <h2 className="font-bold text-lg  divider text-center">Or</h2>
        <div className="mb-3 mx-auto">
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-none text-blue-600"
          >
            <FcGoogle className="text-black"></FcGoogle> SignUp With Google
          </button>
        </div>
        {error && (
          <span className="text-sm text-red-600 text-center">{error}</span>
        )}
        <p className="text-center font-semibold">
          Already Have An Account ?{" "}
          <Link className="text-red-600" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
