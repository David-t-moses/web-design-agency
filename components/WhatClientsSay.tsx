import React from "react";
import TransitionWrapper from "./TransitionWrapper";
import { clients } from "@/lib/data";
import InfiniteMarquee from "./InfiniteMarquee";
import Image from "next/image";

const WhatClientsSay = () => {
  return (
    <section className=" relative w-full max-w-[1200px] flex flex-col justify-start items-center gap-5 mx-auto py-32 overflow-hidden">
      <TransitionWrapper className="w-full">
        <div className="flex flex-col py-8 px-4 mx-auto items-center justify-center text-center w-4/5">
          <h2 className="md:text-3xl sm:text-2xl text-xl font-bold">
            What <span className="text-blue-700">Clients</span> Say!
          </h2>
          <p className="flex flex-col md:text-sm text-[10px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum it amet consectetur ad.
          </p>
        </div>
      </TransitionWrapper>
      <TransitionWrapper>
        <InfiniteMarquee>
          <div className="flex gap-10">
            {clients.map((client, index) => (
              <div
                key={index}
                className="relative flex flex-col items-start justify-center w-80 pr-10 md:w-96 p-2 border border-black rounded-xl overflow-hidden"
              >
                <div className="flex p-3 w-2/5-2xl gap-3 items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-blue-400"></div>
                  <div className="flex flex-col ">
                    <h2 className="md:text-2xl text-[16px] font-bold text-blue-700">
                      {client.name}
                    </h2>
                    <p className="">{client.position}</p>
                  </div>
                </div>
                <p className="flex flex-col md:text-sm px-2 text-[10px] ">
                  {client.description}
                </p>
                <div className="text-xl mt-2 font-bold px-2">
                  <Image
                    src="/6-star.png"
                    alt="stars"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </InfiniteMarquee>
      </TransitionWrapper>
    </section>
  );
};

export default WhatClientsSay;
