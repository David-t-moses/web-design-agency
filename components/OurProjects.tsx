import React from "react";
import TransitionWrapper from "./TransitionWrapper";
import Image from "next/image";
import ProjectCard from "./ui/projects-card";
import { projects } from "@/lib/data";

const OurProjects = () => {
  return (
    <section className=" relative w-full max-w-[1200px] flex flex-col justify-start items-center gap-5 mx-auto py-32 px-5">
      <TransitionWrapper className="w-full">
        <div className="flex flex-col py-8 px-4 mx-auto items-center justify-center text-center w-4/5">
          <h1 className="text-3xl font-bold ">
            Our Professional <span className="text-blue-700">Web Designs</span>{" "}
          </h1>
          <p className="flex flex-col md:text-sm text-[10px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum it amet consectetur ad.
          </p>
        </div>
      </TransitionWrapper>
      <TransitionWrapper className="relative w-full flex flex-wrap justify-center py-7 max-[1023px]:gap-20 gap-10">
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            src={p.src}
            alt={p.alt}
            title="Lorem ipsum dolor"
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, repellendus"
          />
        ))}
      </TransitionWrapper>
    </section>
  );
};

export default OurProjects;
