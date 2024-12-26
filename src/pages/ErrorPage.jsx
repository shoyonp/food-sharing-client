import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div
      className="h-screen w-full flex justify-center items-center text-center "
      id="error-page"
    >
      <div>
        <h1 className="">Oops!</h1>
        <h1 className="">{error.status}</h1>
        <p className="">Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="text-white">{error.statusText || error.message}</i>
        </p>
        <Link className="btn" to="/">
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
