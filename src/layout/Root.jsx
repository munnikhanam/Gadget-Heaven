import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="w-7xl mx-auto font-sora">
      <div className="bg-[#9538E2] rounded-t-xl">
        <Navber />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
