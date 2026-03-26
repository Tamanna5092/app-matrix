import { useLoaderData } from "react-router";
import AppCard from "../../components/AppCard/AppCard";

export default function AllApps() {
  const appData = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto py-10 px-2 md:px-0">
      <div className=" text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Our All Applications</h1>
        <p className="text-[#627382] inter text-xl my-6">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between mt-10 mb-6">
        <h3 className="inter text-2xl font-semibold">
          ({appData.length}) Apps Found
        </h3>
        <label className="input outline-none bg-[#D2D2D2] hover:border hover:border-[#627382]">
          <svg
            className="h-[1.5em] opacity-50 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className="text-[#627382]"
            required
            placeholder="Search here..."
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {appData.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
}
