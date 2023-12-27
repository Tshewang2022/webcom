import React from "react";
import { webcom } from "../assets";
import { navlinks } from "../constants";
import { hamburger } from "../assets/icons";
const Nav = () => {
  return (
    <nav className="bg-blue fixed w-full text-white z-200 py-[8px] px-8">
      <div className="flex justify-between items-center">
        <img src={webcom} alt="logo" />

        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navlinks.map((links) => (
            <li
              className="text-pink-500 font-roboto leading-normal "
              key={links.lable}
            >
              <a href={links.navlink}>{links.lable}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hambergur" width={25} height={25} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
