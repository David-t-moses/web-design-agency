import Image from "next/image";
import React from "react";
import TransitionWrapper from "./TransitionWrapper";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroTwo = ({
  src,
  alt,
  header,
  description,
}: {
  src: string;
  alt: string;
  header: string;
  description: string;
}) => {
  return (
    <section className=" relative w-full lg:h-screen flex flex-col justify-start items-center gap-5 mx-auto pt-[62px]">
      <div className="relative flex w-full !h-full">
        <Image src={src} alt={alt} height={100000} width={100000} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700/95 to-transparent z-40" />
        <div
          className="absolute flex flex-col justify-center left-[3%] top-2 w-1/2 h-full z-50 
              "
        >
          <TransitionWrapper>
            <h2 className="md:text-3xl sm:text-xl text-[18px] text-white font-bold">
              {header}
            </h2>
            <p className="md:text-xl text-[10px] text-slate-300 mt-2 md:mt-3">
              {description}
            </p>
            <div className="lg:flex mt-2 md:mt-3 hidden">
              <Button
                asChild
                className="bg-white text-blue-700 hover:bg-slate-300 cursor-pointer rounded-[7px] shadow-md"
              >
                <Link href="#" className="text-xl !font-semibold">
                  Get started
                </Link>
              </Button>
            </div>
          </TransitionWrapper>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
