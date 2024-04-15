import React, { useState } from "react";
import logo from "../assets/weblogo.svg";

import { MdOutlineCancel } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="  fixed flex items-center top-0 left-0 right-0 h-[75px] z-10 bg-[#121212] bg-opacity-100">
      <div className=" container px-[56px] py-4 flex  flex-wrap items-center  mx-auto ">
        <a href={"/"} className=" flex items-center mr-32 gap-x-1">
          <img className="h-10 w-10 rounded-full" src={logo} alt="logo" />
          <p className="text-lg md:text-lg text-white font-semibold">
            Leonardo
            <span className="text-transparent  bg-clip-text bg-gradient-to-br  from-blue-500 via-purple-500 to-pink-500">
              .Ai
            </span>
          </p>
        </a>

        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => {
                setNavbarOpen(!navbarOpen);
              }}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              {/* <Bar3Icon className="h-5 w-5 " /> */}
              <MdOutlineCancel className="h-5 w-5 " />
            </button>
          ) : (
            <button
              onClick={() => {
                setNavbarOpen(!navbarOpen);
              }}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              {/* <XmarkIcon className="h-5 w-5 " /> */}
              <IoIosMenu className="h-5 w-5 " />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex justify-between gap-x-7 items-center p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <li>
              <a
                href={"#"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href={"#"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href={"#"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href={"#"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                Enterprise
              </a>
            </li>
            <li>
              <a
                href={"#"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                Contact
              </a>
            </li>
            <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-2 px-6 rounded-xl shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
              Launch App
            </button>
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <ul className="flex flex-col py-4 items-center">
          <li>
            <a
              href={"#"}
              className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href={"#"}
              className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href={"#"}
              className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href={"#"}
              className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}

export default NavBar;
