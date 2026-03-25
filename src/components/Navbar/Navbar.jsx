import React from "react";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  const navlinks = (
    <>
      <li className="hover:text-[#9F62F2] hover:underline underline-[#9F62F2] font-medium">
        <a className="">Home</a>
      </li>
      <li className="hover:text-[#9F62F2] hover:underline underline-[#9F62F2] font-medium">
        <a>Apps</a>
      </li>
      <li className="hover:text-[#9F62F2] hover:underline underline-[#9F62F2] font-medium">
        <a>Installation</a>
      </li>
    </>
  );
  return (
    <div className="bg-[#E9E9E9] shadow-sm">
      <div className="navbar max-w-7xl mx-auto">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10" src={logo} alt="logo" />
            <a className="text-lg md:text-xl inter font-bold">AppMatrix</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold">
            <span>
              <FaGithub className="w-5 h-5" />
            </span>{" "}
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
}
