"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo1 from "../logo/logo1.png";
import Logo2 from "../logo/logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="md:flex md:space-between md:items-center bg-[#00000071] text-white sticky top-0 z-10 sm:w-[100%]" style={{ backdropFilter: 'blur(7px)' }}>
      <div className="flex sm:justify-between justify-center p-3 w-full">
        <Image src={Logo1} className="h-8 w-auto md:h-10 md:w-auto" />
        <div className="flex justify-center gap-5">
        <ul
          className={
            menuOpen
              ? "mr-0 md:flex md:flex-row sm:flex sm:flex-col  md:float-right sm:mb-1/4"
              : "mr-0 md:flex md:flex-row hidden sm:flex-col  md:float-right sm:mb-1/4"
          }
        >
          <li className="list-none sm:w-full text-center mt-2 md:w-20">
            <a
              className="md:block md:text-decoration-none md:text-white md:py-2  md:rounded-md md:relative md:transition md:ease-in-out md:hover:text-[#98012E]"
              href="#About"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              About
            </a>
          </li>
          <li className="list-none sm:w-full text-center mt-2 md:w-auto">
            <a
              className="md:block md:text-decoration-none md:text-white md:py-2  md:rounded-md md:relative md:transition md:ease-in-out md:hover:text-[#98012E]"
              href="#Departments"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Departments
            </a>
          </li>
          <li className="list-none sm:w-full text-center mt-2 md:w-20">
            <a
              className="md:block md:text-decoration-none md:text-white md:py-2  md:rounded-md md:relative md:transition md:ease-in-out md:hover:text-[#98012E]"
              href="#Team"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Team
            </a>
          </li>
          <li className="list-none sm:w-full text-center mt-2 md:w-20">
            <a
              className="md:block md:text-decoration-none md:text-white md:py-2  md:rounded-md md:relative md:transition md:ease-in-out md:hover:text-[#98012E]"
              href="#Projects"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Projects
            </a>
          </li>
          <li className="list-none sm:w-full text-center mt-2 md:w-20">
            <a
              className="md:block md:text-decoration-none md:text-white md:py-2  md:rounded-md md:relative md:transition md:ease-in-out md:hover:text-[#98012E]"
              href="#Events"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Events
            </a>
          </li>
          
        </ul>
        </div>
        <Image src={Logo2} className="h-8 w-auto md:h-10 md:w-auto" />
      </div>
      <div
        className="md:hidden flex absolute top-3 right-2 flex-col justify-between w-14 h-8"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <GiHamburgerMenu className="cursor-pointer h-5/6 w-auto" />
      </div>
    </nav>
  );
};

export default Navbar;