import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-home-tablet md:bg-cover flex flex-col h-screen bg-black text-white pt-20 items-center bg-no-repeat gap-20">
      <div className="mt-20 flex  flex-col items-center gap-20">
        <p className="barlow-condensed-regular text-base md:text-xl text-[#D0D6f9]">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h2 className="bellefair-regular text-8xl text-center md:text-[150px]">SPACE</h2>
        <p className="px-8 leading-7 barlow-regular md:w-[69%] text-center text-[20px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="bg-white text-black  flex justify-center items-center text-xl  h-44 w-44 rounded-full ">
        <p className="bellefair-regular text-3xl">EXPLORE</p>
      </div>
    </div>
  );
};

export default Home;
