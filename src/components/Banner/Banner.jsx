import React from "react";
import banner from "../../assets/hero.png";
import icon1 from "../../assets/playstore.png";
import icon2 from "../../assets/appstore.png";

export default function Banner() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center text-center pt-10 px-2 md:px-0">
      <div className="md:max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-black inter">
          We Build <br /> <span className="text-[#9F62F2]">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] inter text-xl mt-6 mb-10">
          At AppMatrix, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex justify-center items-center gap-4 mb-10">
          <button className="flex gap-2 justify-center items-center border border-[#627382] font-semibold inter px-6 py-3">
            <img className="w-5 h-5" src={icon1} alt="Google Play" />
            Google Play
          </button>
          <button className="flex gap-2 justify-center items-center border border-[#627382] font-semibold inter px-6 py-3">
            <img className="w-5 h-5" src={icon2} alt="App Store" />
            App Store
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={banner} alt="Banner.png" />
      </div>
    </div>
  );
}
