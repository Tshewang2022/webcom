import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-1 items-center justify-between">
        <div className="pt-[40px] z-[100]">
          <h3 className="text-[32px] font-bold text-white font-roboto">
            Think big, grow Smart
          </h3>
          <p className="text-white px-[25px] text-[16px] max-w-[560px]">
            Hi, i am Tshewang Gyaltshen. A web developer who is driven by goal
            to create best to web application for my clients. I have 1+ year
            experience in font-end development. Want solution driven
            application? If so, i am a right person.
            <span>Contact me</span>
          </p>
          <div className="">
            <img src="" alt="" />
            <h4 className="text-white pt-[32px] text-[24px] font-roboto">
              What i can do as the font-end developer
            </h4>
            <ul className="text-white px-[25px]">
              <li>Team collaborations </li>
              <li>UI/UX design</li>
              <li>Font-end development with React,Tailwind and Javascript</li>
              <li>Responsive website design with wordpress</li>
            </ul>
          </div>
        </div>

        <div className="text-white ">this will contain the profile image</div>
      </div>
    </section>
  );
};

export default Hero;
