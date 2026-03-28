import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getAppsData } from "../../utilities";
import InstallApp from "../../components/InstallApp/InstallApp";

export default function Installation() {
  const [install, setInstall] = useState([]);
  const installAppsData = useLoaderData();
  console.log(install);

  useEffect(() => {
    const storedAppsData = getAppsData();
    const convertedAppsData = storedAppsData.map((id) => parseInt(id));
    const appsData = installAppsData.filter((app) =>
      convertedAppsData.includes(app.id),
    );
    setInstall(appsData);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-2 md:px-0">
      <div className=" text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Your Installed Apps</h1>
        <p className="text-[#627382] inter text-xl my-6">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between mt-10 mb-6">
        <h3 className="inter text-2xl font-semibold">
          ({install.length}) Apps Found
        </h3>
        <details className="dropdown">
          <summary className="btn m-1">open or close</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {install.map((app) => (
          <InstallApp key={app.id} app={app}></InstallApp>
        ))}
      </div>
    </div>
  );
}
