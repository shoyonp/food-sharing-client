import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";
import UseTitle from "../components/UseTitle";

const Login = () => {
  const { userSignIn, setUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  UseTitle("Login");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    // sign in with email and pass
    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login success");
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.message });
      });
  };

  //   sign in with google
  const handleGoogleSignIn = async () => {
    signInWithPopup(auth, googleLogin())
      .then((result) => {
        const user = result.user;
        toast.success("Login success");
        setUser(user);
        navigate(location?.state ? location.state : "/");
        // console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("please provide an valid email");
      // console.log("valid email");
    } else {
      sendPasswordResetEmail(auth, email).then(() => {
        alert("Password reset email sent, please check your email ");
      });
    }
  };
  return (
    <div className=" min-h-screen md:mt-16 flex justify-center items-center">
      <div className="card rounded-none bg-base-100 w-full max-w-sm shrink-0 shadow-md p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              ref={emailRef}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {error.login && (
              <label className="label text-sm text-red-600">
                {error.login}
              </label>
            )}
            <label onClick={handleForgetPassword} className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold text-sm transition duration-300 shadow-sm hover:bg-gray-200 hover:scale-105 ">Login</button>
          </div>
        </form>
        <h2 className="font-bold text-lg  divider text-center">Or</h2>
        <div className="mb-3 mx-auto">
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-none text-blue-600"
          >
            <FcGoogle className="text-black"></FcGoogle> Login With Google
          </button>
        </div>

        <p className="text-center font-semibold">
          Dont't Have An Account ?{" "}
          <Link className="text-red-600" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
