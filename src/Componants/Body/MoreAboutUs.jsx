import React from "react";
import face from "../../assets/face.png";
import { ButtonBigWhite } from "../Button";

function MoreAboutUs() {
  return (
    <>
      <div className="flex justify-between items-center bg-white h-[60vh] text-main-black px-[180px] gap-[100px] text-right">
        <img className="w-[14rem] mt-10" src={face} alt="face" />
        <div className="flex flex-col justify-center ">
          <h2 className="text-[40px] font-extrabold text-main-orange mb-4 mt-16">
            Experience Nothing
          </h2>
          <p className="text-lg pl-44 font-medium">
            In a world cluttered with everything, we offer you the purest form
            of nothing. Embrace the void, find peace in emptiness, and unlock
            the potential of absolute nothingness.
          </p>
          <div className="mt-12">
            <ButtonBigWhite text="Learn More" link="#learnmore" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreAboutUs;
