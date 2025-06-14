import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, UserSignOut } = useContext(AuthContext);

  const handleSignOut = () => {
    UserSignOut()
      .then(() => {
        toast.success("Logout success");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `py-2 px-4 rounded-md transition-all duration-300 ${
            isActive
              ? "bg-blue-100 text-blue-600 font-semibold shadow-lg"
              : "hover:bg-blue-50 hover:text-blue-500"
          }`
        }
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `py-2 px-4 rounded-md transition-all duration-300 ${
            isActive
              ? "bg-blue-100 text-blue-600 font-semibold shadow-lg"
              : "hover:bg-blue-50 hover:text-blue-500"
          }`
        }
        to="/availableFood"
      >
        Available Foods
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `py-2 px-4 rounded-md transition-all duration-300 ${
            isActive
              ? "bg-blue-100 text-blue-600 font-semibold shadow-lg"
              : "hover:bg-blue-50 hover:text-blue-500"
          }`
        }
        to="/faq"
      >
        FAQ
      </NavLink>

      {user && user.email ? (
        <NavLink
          className={({ isActive }) =>
            `py-2 px-4 rounded-md transition-all duration-300 ${
              isActive
                ? "bg-blue-100 text-blue-600 font-semibold shadow-lg"
                : "hover:bg-blue-50 hover:text-blue-500"
            }`
          }
          to="/addFood"
        >
          Add Food
        </NavLink>
      ) : (
        ""
      )}

      {user && user.email ? (
        <NavLink
          className={({ isActive }) =>
            `py-2 px-4 rounded-md transition-all duration-300 ${
              isActive
                ? "bg-blue-100 text-blue-600 font-semibold shadow-lg"
                : "hover:bg-blue-50 hover:text-blue-500"
            }`
          }
          to="/manageFood"
        >
          Manage My Foods
        </NavLink>
      ) : (
        ""
      )}

      {user && user.email ? (
        <NavLink
          className={({ isActive }) =>
            `py-2 px-4 rounded-md transition-all duration-300 ${
              isActive
                ? "bg-blue-100 text-blue-600 font-semibold shadow-lg"
                : "hover:bg-blue-50 hover:text-blue-500"
            }`
          }
          to="/foodRequest"
        >
          My Food Request
        </NavLink>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="navbar w-full fixed z-10 top-0 bg-black/25 mx-auto md:px-7 lg:px-20 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow gap-5 text-black"
          >
            {links}
          </ul>
        </div>
        <div>
          <Link
            href="/"
            className="text-2xl font-bold flex items-center space-x-2"
          >
            <span className="text-red-500 transition-transform transform hover:scale-110">
              S
            </span>
            <span className="text-white transition-colors hover:text-red-500">
              hare
            </span>
            <span className="text-red-500 transition-transform transform hover:scale-110">
              P
            </span>
            <span className="text-white transition-colors hover:text-red-500">
              lates
            </span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <>
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} title={user?.displayName} />
              </div>
            </div>
            <button
              className="btn border-none bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg font-semibold text-sm shadow-sm hover:from-red-600 hover:to-red-800 hover:scale-105"
              onClick={handleSignOut}
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link
              className="btn bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold text-sm transition duration-300 shadow-sm hover:bg-gray-200 hover:scale-105"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="btn border-none bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow-sm hover:from-red-600 hover:to-red-800 hover:scale-105"
              to="register"
            >
              SignUp
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
