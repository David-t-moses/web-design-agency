import HeroTwo from "@/components/Hero-2";
import OurProjects from "@/components/OurProjects";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <HeroTwo
        src="/hero-6.webp"
        alt="About-hero-img"
        header="Replicatable Designs and Web Solutions we have made for others and will make for you!"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
      />
      <OurProjects />
    </div>
  );
};

export default Projects;
