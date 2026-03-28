import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../components/Home/Home";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import Error404 from "../Pages/Error404/Error404";
import Installation from "../Pages/Installation/Installation";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error404></Error404>,
    children: [
      { index: true, loader: () => fetch("/appData.json"), Component: Home },
      {
        path: "allApps",
        loader: () => fetch("/appData.json"),
        Component: AllApps,
      },
      { path: "appDetails/:id", loader: () => fetch("/appData.json"), Component: AppDetails },
      { path: "installation", loader: () => fetch("/appData.json"), Component: Installation }
    ],
  },
]);

export default Router;
