import About from "@/components/About";
import HeroTwo from "@/components/Hero-2";
import MissionAndVission from "@/components/MissionAndVission";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const About_us = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <HeroTwo
        src="/hero-6.webp"
        alt="About-hero-img"
        header="The World's Choicest Web Design and Development Agency"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
      />
      <About />
      <MissionAndVission />
      <Button
        asChild
        className="bg-blue-700 text-white hover:bg-blue-800 cursor-pointer rounded-[7px] shadow-md mb-20"
      >
        <Link href="#" className="text-xl !font-semibold">
          Explore Services
        </Link>
      </Button>
    </div>
  );
};

export default About_us;
