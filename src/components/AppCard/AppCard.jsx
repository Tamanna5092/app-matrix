import React from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router";

export default function AppCard({ app }) {
  const { id, title, image, ratingAvg, downloads } = app;
  return (
    <Link to={`/appDetails/${id}`} className="card bg-white p-4">
      <figure className="bg-[#D9D9D9]">
        <img src={image} alt="image" className="w-64 h-64 rounded-lg p-6" />
      </figure>
      <div className=" ">
        <h2 className="text-xl font-medium inter my-4">{title}</h2>
      </div>
      <div className="flex justify-between">
        <button className="flex items-center gap-2 text-[#00D390] font-medium bg-[#F1F5E8] p-1">
          <span>
            <FiDownload className="w-4 h-4" />
          </span>{" "}
          {downloads}
        </button>
        <button className="flex items-center gap-2 text-[#FF8811] font-medium bg-[#F1F5E8] p-1">
          <span>
            <FaStar className="w-4 h-4" />
          </span>{" "}
          {ratingAvg}
        </button>
      </div>
    </Link>
  );
}
