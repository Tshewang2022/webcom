import React from "react";
import {
  reactjs,
  tailwindcss,
  nodejs,
  wordpress,
  controlVersion,
  javascript,
} from "../assets";

const Skills = () => {
  // const function card(params) {

  // }
  return (
    <section>
      <h4 className="text-[24px] font-semibold font-roboto">Skills</h4>
      {/* making the card with the flex is the absolete, make the card with the grid */}
      <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div className="bg-gray shadow-sm min-w-[160px] pt-[10px] rounded-md">
          <img src={reactjs} alt="" className="" />
          {/* </div><div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700 overflow-y-hidden"> */}
          {/* <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
              <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
                Compare
                <span></span>
              </li>
              <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
                View Details
                <span className="text-lg"></span>
              </li>
              <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
                Add to Wish List
                <span></span>
              </li>
            </ul>
          </div> */}
          <p className="pt-8 text-black px-[4px] pb-[20px] text-[20px] font-bold font-roboto">
            Javascript
          </p>
        </div>
        <div className="bg-gray shadow-sm min-w-[160px] pt-[10px] px-[10px] rounded-md">
          <img src={wordpress} alt="" className="" />
          <p className="pt-8 text-black px-[4px] pb-[20px] text-[20px] font-bold font-roboto">
            Javascript
          </p>
        </div>
        <div className="bg-gray shadow-sm min-w-[160px] pt-[10px] px-[10px] rounded-md ">
          <img src={controlVersion} alt="" className="" />
          <div className="rounded-full bg-white absolute"></div>
          <p className="pt-8 text-black px-[4px] pb-[20px] text-[20px] font-bold font-roboto">
            Javascript
          </p>
        </div>
        <div className="bg-gray shadow-sm min-w-[160px] pt-[10px] px-[10px] rounded-md ">
          <img src={javascript} alt="" className="" />
          <div className="rounded-full bg-white absolute"></div>
          <p className="pt-8 text-black px-[4px] pb-[20px] text-[20px] font-bold font-roboto">
            Javascript
          </p>
        </div>
        <div className="bg-gray shadow-sm min-w-[160px] pt-[10px] px-[10px] rounded-md">
          <img src={nodejs} alt="" className="" />
          <div className="rounded-full bg-white absolute"></div>
          <p className="pt-8 text-black px-[4px] pb-[20px] text-[20px] font-bold font-roboto">
            Javascript
          </p>
        </div>
        <div className="bg-gray shadow-sm min-w-[160px] pt-[10px] px-[10px] rounded-md ">
          <img src={tailwindcss} alt="" className="" />
          <div className="rounded-full bg-white absolute"></div>
          <p className="pt-8 text-black px-[4px] pb-[20px] text-[20px] font-bold font-roboto">
            Javascript
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
