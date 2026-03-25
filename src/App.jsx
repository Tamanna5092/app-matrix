import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#D2D2D2]">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
