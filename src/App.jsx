import React from "react";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import WorkExperience from "./sections/WorkExperience";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main>
      <Nav />
      <div className="px-8 py-10 bg-primary min-h-screen">
        <Hero />
      </div>
      <div className="px-8 py-10 ">
        <Skills />
      </div>
      <div className="px-8 py-10">
        <WorkExperience />
      </div>
      <div className="px-8 py-10">
        <Projects />
      </div>
      <div className=" py-10 bg-primary">
        <Footer />
      </div>
    </main>
  );
};

export default App;
