import React from "react";
import { useLoaderData, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { AiFillLike } from "react-icons/ai";
import Rechart from "./Rechart/Rechart";
import { addToStoredApps } from "../../utilities";

export default function AppDetails() {
  const { id } = useParams();
  const convertId = parseInt(id);
  const appData = useLoaderData();
  const findData = appData.find((app) => app.id === convertId);
  const {
    ratings,
    title,
    image,
    ratingAvg,
    downloads,
    reviews,
    size,
    description,
  } = findData;

  const handleInstall = (id) => { 
    addToStoredApps(id);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-2 md:px-0">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex justify-center items-center">
          <img
            className="w-80 object-cover object-center bg-white p-6"
            src={image}
            alt=""
          />
        </div>
        <div className="grow">
          <h2 className="inter text-[#001931] text-3xl font-bold">{title}</h2>
          <p className="text-xl text-[#627382] font-semibold">
            Developed by <span className="text-[#9F62F2]">productive.io</span>
          </p>
          <hr className="text-[#aaafb3] mt-6" />
          <div className="flex flex-col gap-8 mt-6 md:flex-row">
            <div>
              <FiDownload className="text-[#00D390] w-10 h-10"></FiDownload>
              <p className="text-[#001931] my-2">Downloads</p>
              <p className="inter text-[#001931] text-4xl font-semibold">
                {downloads}
              </p>
            </div>
            <div>
              <FaStar className="text-[#FF8811] w-10 h-10"></FaStar>
              <p className="text-[#001931] my-2">Average Ratings</p>
              <p className="inter text-[#001931] text-4xl font-semibold">
                {ratingAvg}
              </p>
            </div>
            <div>
              <AiFillLike className="text-[#632EE3] w-10 h-10"></AiFillLike>
              <p className="text-[#001931] my-2">Total Reviews</p>
              <p className="inter text-[#001931] text-4xl font-semibold">
                {reviews}
              </p>
            </div>
          </div>
          <button
            onClick={() => handleInstall(id)}
            className="bg-[#00D390] text-white text-xl font-semibold rounded px-5 py-3 mt-6 cursor-pointer"
          >
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      <hr className="text-[#aaafb3] mt-6" />
      <div className="my-10">
        <h3 className="inter text-[#001931] text-2xl font-semibold mb-6">
          Ratings
        </h3>
        <Rechart ratings={ratings}></Rechart>
      </div>
      <hr className="text-[#aaafb3] mt-6" />
      <div className="mt-10">
        <h3 className="inter text-[#001931] text-2xl font-semibold mb-4">
          Description
        </h3>
        <p className="text-[#627382] text-lg">{description}</p>
      </div>
    </div>
  );
}
