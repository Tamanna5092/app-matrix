import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{ index: true, Component: Home }],
  },
]);

export default Router;
