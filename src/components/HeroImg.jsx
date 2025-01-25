import Hero from "../assets/banner.jpg";
const HeroImg = () => {
  return (
    <div className="  border-2 border-[#FFFFFF4D] rounded-xl p-5">
      <img className="w-5xl min-h-[563px] rounded-xl" src={Hero} alt="" />
    </div>
  );
};

export default HeroImg;
