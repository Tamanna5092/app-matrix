import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function InstallApp({ app }) {
  const { title, image, ratingAvg, downloads, size } = app;
  return (
    <div className="flex flex-col justify-between md:items-center bg-white rounded mt-4 md:flex-row gap-6 p-4">
      <div className="flex flex-col md:items-center gap-6 md:flex-row">
        <div>
          <img src={image} alt="app image" className="w-20 h-20 p-3 bg-[#D9D9D9] rounded-lg" />
        </div>
        <div className="">
          <h3 className="text-[#001931] text-xl inter font-medium">{title}</h3>
          <div className="flex flex-row gap-8 mt-4 ">
            <div className="flex gap-2 items-center">
              <FiDownload className="text-[#00D390] w-6 h-6"></FiDownload>
              <p className="inter text-[#001931] font-medium">{downloads}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaStar className="text-[#FF8811] w-6 h-6"></FaStar>
              <p className="inter text-[#001931] font-medium">{ratingAvg}</p>
            </div>
            <div>
              <p className="inter text-[#001931] font-medium">{size} MB</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="bg-[#00D390] text-white font-semibold rounded px-5 py-3 cursor-pointer">
          Uninstall
        </button>
      </div>
    </div>
  );
}
