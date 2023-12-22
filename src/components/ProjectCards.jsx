import React from "react";

const ProjectCards = () => {
  return (
    <section>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-green-400 rounded-t-md">one</div>
        <div className="bg-green-400">two</div>
        <div className="bg-green-400">three</div>
      </div>
    </section>
  );
};

export default ProjectCards;
