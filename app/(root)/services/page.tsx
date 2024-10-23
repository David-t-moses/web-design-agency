import HeroTwo from "@/components/Hero-2";
import OurServices from "@/components/OurServices";
import TransitionWrapper from "@/components/TransitionWrapper";
import WhyInvestWithUs from "@/components/WhyInvestWithUs";
import React from "react";

const Services_page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <HeroTwo
        src="/hero-3.webp"
        alt="Services-hero-img"
        header="ImpactFul Web Design and Development Services"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
      />
      <OurServices />
      <WhyInvestWithUs />
    </div>
  );
};

export default Services_page;
