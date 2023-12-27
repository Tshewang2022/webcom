import React from "react";
import ProjectCards from "../components/ProjectCards";

const Projects = () => {
  return (
    <section id="Projects">
      <h3 className="text-[32px] font-semibold font-roboto">Projects</h3>
      <p className=" max-w-[768px] mb-[10px]">
        The following mentioned projects are created using wordpress and react.
        The projects listed below are for self improvement and not subjected to
        industry standard. i hereby declare that all UI/UX design are performed
        by me without any copyright infringement. LInk for the design and
        project are being shared below
      </p>
      <ProjectCards />
    </section>
  );
};

export default Projects;
