import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#D2D2D2]">
      <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
