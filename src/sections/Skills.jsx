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
  return (
    <section>
      <h4 className="text-[24px] font-semibold font-roboto">Skills</h4>
      {/* making the card with the flex is the absolete, make the card with the grid */}
      <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div className="bg-gray shadow-sm min-w-[160px] pt-[10px] rounded-md relative">
          <img src={reactjs} alt="" className="" />
          <p className="pt-8 text-black px-[4px] pb-[20px] text-[20px] font-bold font-roboto">
            Javascript
          </p>
        </div>
        <div className="bg-gray shadow-sm min-w-[160px] pt-[10px] px-[10px] rounded-md relative">
          <img src={wordpress} alt="" className="" />
          <p className="pt-8 text-black px-[4px] pb-[20px] text-[20px] font-bold font-roboto">
            Javascript
          </p>
        </div>
        <div className="bg-gray shadow-sm min-w-[160px] pt-[10px] px-[10px] rounded-md relative">
          <img src={controlVersion} alt="" className="" />
          <div className="rounded-full bg-white absolute"></div>
          <p className="pt-8 text-black px-[4px] pb-[20px] text-[20px] font-bold font-roboto">
            Javascript
          </p>
        </div>
        <div className="bg-gray shadow-sm min-w-[160px] pt-[10px] px-[10px] rounded-md relative">
          <img src={javascript} alt="" className="" />
          <div className="rounded-full bg-white absolute"></div>
          <p className="pt-8 text-black px-[4px] pb-[20px] text-[20px] font-bold font-roboto">
            Javascript
          </p>
        </div>
        <div className="bg-gray shadow-sm min-w-[160px] pt-[10px] px-[10px] rounded-md relative">
          <img src={nodejs} alt="" className="" />
          <div className="rounded-full bg-white absolute"></div>
          <p className="pt-8 text-black px-[4px] pb-[20px] text-[20px] font-bold font-roboto">
            Javascript
          </p>
        </div>
        <div className="bg-gray shadow-sm min-w-[160px] pt-[10px] px-[10px] rounded-md relative">
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
