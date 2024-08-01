import React from "react";
import logo from "../../assets/logo.png";
import NavItem from "./NavItem";
import { Button } from "../Button";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center px-[150px] h-[18vh]">
        <img className="" src={logo} alt="logo" />
        <div className="flex gap-10 text-lg justify-center items-center">
          <NavItem text="Home" link="#home" />
          <NavItem text="Dashboard" link="#dashboard" />
        </div>
        <div className="flex gap-10 text-lg justify-center items-center ">
          <NavItem text="Signup" link="#signup" />
          <Button text="Login" link="#login" />
        </div>
      </div>
    </>
  );
}

export default Header;
