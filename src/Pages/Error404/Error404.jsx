import React from "react";
import { Link } from "react-router";
import error from "../../assets/error-404.png";

export default function Error404() {
  return (
    <div className="h-screen max-w-7xl mx-auto flex justify-center items-center">
      <div className="text-center">
        <img src={error} alt="404" />
        <h1 className="text-3xl md:text-5xl text-center font-semibold mt-6">
          Oops, page not found!
        </h1>
        <p className="text-[#627382] text-xl my-4">
          The page you are looking for is not available.
        </p>
        <Link
          to={"/"}
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-4 py-3"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}
