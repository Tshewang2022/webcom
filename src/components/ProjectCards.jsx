import React from "react";
import { project1, project2, project3 } from "../assets";
import { figma2, git2 } from "../assets/icons";
const ProjectCards = () => {
  return (
    <section>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="rounded-t-md p-[10px] bg-[#F5F5F5]">
          <img src={project2} alt="" />
          <div className="bg-[#F5F5F5] px-[10px]">
            <p className="text-[12px]">
              <div className="bg-[#F5F5F5]">
                <p className="text-[12px] py-[10px] pb-[10px]">
                  It was my first portfolio website developed using react and
                  taiwlindcss,. And also my first Figma project designed,
                  although it does not have industries base design. It was a
                  good project to begin with
                </p>
                <div className="flex justify-between">
                  <span>React.js Tailwindcss, Express, Mongodb</span>
                  <div className="flex justify-end justify-between items-center text-black">
                    <div className="flex gap-[8px]">
                      {/* <FaFigma width={24} height={24} color="blue" />
                      <FaGithubSquare width={24} height={24} color="blue" /> */}
                      <img src={git2} alt="" width={20} height={20} />
                      <img src={figma2} alt="" width={20} height={20} />
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
        <div className="rounded-t-md p-[10px] bg-[#F5F5F5]">
          <img src={project2} alt="" />
          <div className="bg-[#F5F5F5] px-[10px]">
            <p className="text-[12px]">
              <div className="bg-[#F5F5F5]">
                <p className="text-[12px] py-[10px] pb-[10px]">
                  It was my first portfolio website developed using react and
                  taiwlindcss,. And also my first Figma project designed,
                  although it does not have industries base design. It was a
                  good project to begin with
                </p>
                <div className="flex justify-between">
                  <span>React.js Tailwindcss, Express, Mongodb</span>
                  <div className="flex justify-end justify-between items-center text-black">
                    <div className="flex gap-[8px]">
                      {/* <FaFigma width={24} height={24} color="blue" />
                      <FaGithubSquare width={24} height={24} color="blue" /> */}
                      <img src={git2} alt="" width={20} height={20} />
                      <img src={figma2} alt="" width={20} height={20} />
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
        <div className="rounded-t-md p-[10px] bg-[#F5F5F5]">
          <img src={project2} alt="" />
          <div className="bg-[#F5F5F5] px-[10px]">
            <p className="text-[12px]">
              <div className="bg-[#F5F5F5]">
                <p className="text-[12px] py-[10px] pb-[10px]">
                  It was my first portfolio website developed using react and
                  taiwlindcss,. And also my first Figma project designed,
                  although it does not have industries base design. It was a
                  good project to begin with
                </p>
                <div className="flex justify-between">
                  <span>React.js Tailwindcss, Express, Mongodb</span>
                  <div className="flex justify-end justify-between items-center text-black">
                    <div className="flex gap-[8px]">
                      {/* <FaFigma width={24} height={24} color="blue" />
                      <FaGithubSquare width={24} height={24} color="blue" /> */}
                      <img src={git2} alt="" width={20} height={20} />
                      <img src={figma2} alt="" width={20} height={20} />
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
