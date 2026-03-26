import React from "react";
import App from "../App/App";

export default function TrendingApps({ appData }) {
  return (
    <div className="max-w-7xl mx-auto py-10 px-2 md:px-0">
      <div className=" text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Trending Apps</h1>
        <p className="text-[#627382] inter text-xl my-6">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {appData.slice(0, 8).map((app) => (
          <App key={app.id} app={app}></App>
        ))}
      </div>
    </div>
  );
}
