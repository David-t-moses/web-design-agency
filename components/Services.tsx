import React from "react";
import TransitionWrapper from "./TransitionWrapper";
import { services } from "@/lib/data";

const Services = () => {
  return (
    <section className=" relative w-full max-w-[1200px] flex flex-col justify-start items-center gap-5 mx-auto py-32">
      <TransitionWrapper className="w-full">
        <div className="flex flex-col py-8 px-4 mx-auto items-center justify-center text-center w-4/5">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold">
            We Provide the Best <span className="text-blue-700">Services</span>
          </h1>
          <p className="flex flex-col md:text-sm text-[10px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum it amet consectetur ad.
          </p>
        </div>
      </TransitionWrapper>
      <TransitionWrapper className="px-4 w-full flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            className="relative flex flex-col items-start justify-center w-48 p-3 border border-black rounded-xl overflow-hidden"
            key={index}
          >
            <div className="absolute -top-2 -left-2 p-2 w-2/5 bg-blue-700 rounded-2xl h-[35%]">
              {/* <Image
                src={service.img}
                alt={service.name}
                width={50}
                height={50}
              /> */}
            </div>
            <div className="pt-16">
              <h2 className="md:text-lg text-sm font-semibold">
                {service.name}
              </h2>
              <p className="flex flex-col md:text-sm text-[10px] text-black/60">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </TransitionWrapper>
    </section>
  );
};

export default Services;
