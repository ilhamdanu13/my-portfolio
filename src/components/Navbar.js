import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import {AiOutlineClose} from 'react-icons/ai'
import { useRouter } from "next/router";

const Navbar = () => {
  // states
  const [menu, setMenu] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(false);

  // router
  const { pathname } = useRouter();

  const buttonHandler = () => {
    setMenu(true);
  };

  const setActiveLink = (path) => {
    return pathname === path
      ? "text-red-300"
      : pathname.includes(`${path}/`)
      ? "text-red-300"
      : "";
  };

  return (
    <div className="relative">
      {/* Desktop */}
      <div className="text-[#E5E5E5] md:flex font-poppins items-center md:mb-32 mb-10 hidden px-4 md:px-16 lg:px-24">
        <div className="flex-1">
          <div className="flex">
            <h1 className="text-2xl font-bold mr-2">DANU DEV</h1>

            <img
              src="Ellipse 2628.png"
              alt="ellipse"
              className="w-2 h-2 mt-1"
            />
          </div>
        </div>

        <ul className="md:flex md:gap-x-10 hidden">
          <li>
            <Link href={"#about"} scroll={false}>About</Link>
          </li>

          <li>
            <Link href={"#services"} scroll={false}>Services</Link>
          </li>

          <li>
            <Link href={"#portfolios"} scroll={false}>Projects</Link>
          </li>

          <li>
            <Link href={"#contact"} scroll={false}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile */}
      {/* className={`z-50 h-screen px-6 pt-8  w-full top-0 transition duration-300  active:duration-500 ${
          menu ? "-translate-y-0" : "-translate-y-full"
        }`} */}

      <div className=" py-10 md:hidden">
        <div onClick={buttonHandler} className="flex justify-end px-4">
          <GiHamburgerMenu className="w-8 h-8 text-white" />
        </div>
        <div
          className={`bg-[#091427] z-50 absolute top-0 duration-300 w-full h-screen py-10 text-white font-semibold ${
            menu ? "-translate-y-0" : "-translate-y-full"
          }`}
        >
          <div onClick={() => setMenu(false)} className="flex justify-end px-4 mb-16">
            <AiOutlineClose className="w-8 h-8 text-white" />
          </div>
          <ul className="flex flex-col items-center gap-y-10 text-xl">
          <li>
            <Link href={"#about"} scroll={false} onClick={() => setMenu(false)}>About</Link>
          </li>

          <li>
            <Link href={"#services"} scroll={false} onClick={() => setMenu(false)}>Services</Link>
          </li>

          <li>
            <Link href={"#portfolios"} scroll={false} onClick={() => setMenu(false)}>Projects</Link>
          </li>

          <li>
            <Link href={"#contact"} scroll={false} onClick={() => setMenu(false)}>Contact</Link>
          </li>

          <div className="flex">
            <h1 className="font-bold mr-2">DANU DEV</h1>

            <img
              src="Ellipse 2628.png"
              alt="ellipse"
              className="w-2 h-2 mt-1"
            />
          </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
