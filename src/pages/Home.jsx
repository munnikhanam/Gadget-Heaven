import Banner from "../components/Banner";
import HeroImg from "../components/HeroImg";

const Home = () => {
  return (
    <div className="relative">
      <div className="text-[#FFFF] rounded-b-lg bg-[#9538E2]  min-h-[694px] py-20  rounded-b-xl   ">
        <Banner />
      </div>
      <div className="absolute inset-x-28 -bottom-96 rounded-xl">
        <HeroImg />
      </div>
    </div>
    // -bottom-96 left-28
  );
};

export default Home;
