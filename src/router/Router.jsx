import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../components/Home/Home";
import AllApps from "../Pages/AllApps/AllApps";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, loader: ()=> fetch("/appData.json"), Component: Home },
      { path: 'allApps', loader: ()=> fetch("/appData.json"), Component: AllApps}
    ],
  },
]);

export default Router;
