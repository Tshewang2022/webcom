import React from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { TbSquareArrowRightFilled } from "react-icons/tb";
import { gaiTech } from "../assets";
const WorkExperience = () => {
  return (
    <section>
      <h3 className="text-[32px] font-roboto font-semibold">Work Experience</h3>
      <div className="flex px-[32px] gap-4">
        <IoShieldCheckmarkSharp
          className="w-[24px] h-[28px] pt-[7px]"
          color="blue"
        />
        <img src={gaiTech} alt="" className="h-[40px]" />
        <p className="font-normal font-rotobo text-[24px] ">gai Technologies</p>
      </div>
      <div className=" px-[64px]">
        <ul className="">
          <li className="flex gap-[10px] font-roboto text-[20px] items-center justify-start">
            <TbSquareArrowRightFilled
              color="blue"
              className="w-[20px] h-[20px]"
            />
            Developing and maintaining the web applications using wordpress and
            drupal
          </li>
          <li className="flex gap-[10px] font-roboto text-[20px] items-center justify-start">
            <TbSquareArrowRightFilled
              color="blue"
              className="w-[20px] h-[20px]"
            />
            Implementing responsive design and browsers compatibility
          </li>
          <li className="flex gap-[10px] font-roboto text-[20px] items-center justify-start">
            <TbSquareArrowRightFilled
              color="blue"
              className="w-[20px] h-[20px]"
            />
            Security and model updates
          </li>
          <li className="flex gap-[10px] font-roboto text-[20px] items-center justify-start">
            <TbSquareArrowRightFilled
              color="blue"
              className="w-[20px] h-[20px]"
            />
            Engaging in code review and clean up for existing projects
          </li>
          <li className="flex gap-[10px] font-roboto text-[20px] items-center justify-start">
            <TbSquareArrowRightFilled
              color="blue"
              className="w-[20px] h-[20px]"
            />
            SEO management of wordpress site
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
