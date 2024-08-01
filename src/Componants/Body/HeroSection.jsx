import React from "react";
import hero from "../../assets/hero.png";

function HeroSection() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center bg-white h-[82vh] 
      border-4 px-[180px] mt-0 py-0 z-0 "
      >
        <h1 className=" text-7xl text-main-black font-black tracking-tight pt-24 m-0 text-center">
          This Site Does <span className="text-main-orange">Nothing!</span>
        </h1>
        <p className="text-main-black font-semibold text-2xl mb-10 mt-2">
          Really, It does Nothing!
        </p>

        <img className="w-[480px] z-0 " src={hero} alt="hero" />
      </div>
    </>
  );
}

export default HeroSection;
