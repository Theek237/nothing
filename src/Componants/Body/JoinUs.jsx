import React from "react";
import { ButtonBig } from "../Button";
function JoinUs() {
  return (
    <>
      <div
        className="z-20 relative bg-main-black h-[60vh] flex flex-col justify-center 
      items-center m-0 p-0 gap-7"
      >
        <h2 className="text-3xl font-semibold tracking-normal ">
          Join us Now! But it Will still do Nothing.{" "}
        </h2>
        <ButtonBig text="Join" link="#signup" />
      </div>
    </>
  );
}

export default JoinUs;
