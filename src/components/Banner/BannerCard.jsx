import React from "react";

export default function BannerCard() {
  return (
    <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white py-10 px-2 md:px-0">
      <div className="">
        <h2 className="text-3xl md:text-5xl text-center font-semibold">
          Trusted by Millions, Built for You
        </h2>
        <div className="md:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          {/* card 1 */}
          <div className="card">
            <div className="card-body inter text-center">
              <p>Total Downloads</p>
              <h2 className="text-6xl font-extrabold">29.6M</h2>
              <p>21% more than last month</p>
            </div>
          </div>
          {/* card 2 */}
          <div className="card">
            <div className="card-body inter text-center">
              <p>Total Reviews</p>
              <h2 className="text-6xl font-extrabold">906K</h2>
              <p>46% more than last month</p>
            </div>
          </div>
          {/* card 3 */}
          <div className="card">
            <div className="card-body inter text-center">
              <p>Active Apps</p>
              <h2 className="text-6xl font-extrabold">132+</h2>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
