import AllGedgets from "../components/AllGedgets";
import Banner from "../components/Banner";
import HeroImg from "../components/HeroImg";
import SideMenu from "../components/SideMenu";

const Home = () => {
  return (
    <div className="mb-50">
      <div className="relative">
        <div className="text-[#FFFF] rounded-b-lg bg-[#9538E2]  min-h-[694px] py-20">
          <Banner />
        </div>
        <div className="absolute inset-x-28 -bottom-96 rounded-xl">
          <HeroImg />
        </div>
      </div>
      {/* all card */}
      <div className="mt-96 bg-red-400">
        <h3 className="text-[#0B0B0B] font-bold text-4xl my-20 pt-20">
          Explore Cutting-Edge Gadgets
        </h3>
        <div className="mt-10 flex gap-3 ">
          <div className="">
            <SideMenu />
          </div>
          <div>
            <AllGedgets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
