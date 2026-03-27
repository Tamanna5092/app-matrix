import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../components/Home/Home";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Pages/AppDetails/AppDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, loader: () => fetch("/appData.json"), Component: Home },
      {
        path: "allApps",
        loader: () => fetch("/appData.json"),
        Component: AllApps,
      },
      { path: "appDetails/:id", loader: () => fetch("/appData.json"), Component: AppDetails },
    ],
  },
]);

export default Router;
