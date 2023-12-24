import React from "react";
import { webcom } from "../assets";
import { figma3, linkedin, github2 } from "../assets/icons";

const Footer = () => {
  return (
    <section className="p">
      <div className="px-8 flex justify-between">
        <div>
          <img src={webcom} alt="webcom" />
          <p className="text-white text-[14px] max-w-[340px]">
            Note: If i am the right candidate for you, DONT forget to message. I
            would love to work with the exciting team.
          </p>

          <div className="flex pt-4">
            <img src={figma3} alt="" width={48} height={48} />
            <img src={linkedin} alt="" width={42} height={42} />
            <img
              src={github2}
              alt=""
              className="w=[24px] h-[24px] rounded-full"
            />
          </div>
        </div>
        <div className="justify-start">
          <h4 className="text-white font-semibold font-roboto">
            Contact Information
          </h4>
          <div className="px-[10px] pt-[10px]">
            <ul className="text-white text-[14px] font-roboto">
              <li className="pt-[5px]">gmail: tshewangyaltshen0@gmail.com</li>
              <li className="pt-[10px]">address: RTC, Thimphu, Bhutan</li>
              <li className="pt-[10px]">phone: 97517760818</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-white leading-normal font-roboto">
        <p>copyrigh@right policy</p>
      </div>
    </section>
  );
};

export default Footer;
