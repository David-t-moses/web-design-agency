import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import TransitionWrapper from "./TransitionWrapper";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" relative w-full flex justify-between items-center gap-5 xl:h-screen pt-[62px] mx-auto">
      <Carousel className="flex flex-col w-full !h-full mx-auto relative">
        <CarouselContent className="flex w-full !h-full mx-auto">
          <CarouselItem className="flex w-full !h-full">
            <div className="relative flex w-full !h-full bg-red-900">
              <Image
                src="/hero-1.jpg"
                alt="Hero Img"
                height={100000}
                width={100000}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700/95 to-transparent z-40" />
              <div
                className="absolute flex flex-col justify-center left-[3%] top-2 w-1/2 h-full z-50 
              "
              >
                <TransitionWrapper>
                  <h2 className="md:text-3xl sm:text-xl text-[18px] text-white font-bold">
                    Lorem ipsum, dolor adipisicing.
                  </h2>
                  <p className="md:text-xl text-[10px] text-slate-300 mt-2 md:mt-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur suscipit placeat tempore fugit. Dolorem, beatae!
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
          </CarouselItem>
          {/* <CarouselItem className="flex w-full !h-full">
            <div className="relative flex !w-full !h-full">
              <Image
                src="/hero-2.jpg"
                alt="Hero Img"
                height={10000}
                width={100000}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700/95 to-transparent z-50" />
              <div
                className="absolute flex flex-col justify-center left-[3%] top-2 w-1/2 h-full z-50 
              "
              >
                <h2 className="md:text-3xl sm:text-xl text-[18px] text-white font-bold">
                  Lorem ipsum, dolor adipisicing.
                </h2>
                <p className="md:text-xl text-[10px] text-slate-300 mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur suscipit placeat tempore fugit. Dolorem, beatae!
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="flex w-full h-full">
            <div className="relative flex w-full h-full">
              <Image
                src="/hero-3.webp"
                alt="Hero Img"
                height={10000}
                width={100000}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700/95 to-transparent z-50" />
              <div
                className="absolute flex flex-col justify-center left-[3%] top-2 w-1/2 h-full z-50 
              "
              >
                <h2 className="md:text-3xl sm:text-xl text-[18px] text-white font-bold">
                  Lorem ipsum, dolor adipisicing.
                </h2>
                <p className="md:text-xl text-[10px] text-slate-300 mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur suscipit placeat tempore fugit. Dolorem, beatae!
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="flex w-full h-full">
            <div className="relative flex w-full h-full">
              <Image
                src="/hero-4.jpg"
                alt="Hero Img"
                height={10000}
                width={100000}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700/95 to-transparent z-50" />
              <div
                className="absolute flex flex-col justify-center left-[3%] top-2 w-1/2 h-full z-50 
              "
              >
                <h2 className="md:text-3xl sm:text-xl text-[18px] text-white font-bold">
                  Lorem ipsum, dolor adipisicing.
                </h2>
                <p className="md:text-xl text-[10px] text-slate-300 mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur suscipit placeat tempore fugit. Dolorem, beatae!
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="flex w-full h-full">
            <div className="relative flex w-full h-full">
              <Image
                src="/hero-5.jpg"
                alt="Hero Img"
                height={10000}
                width={100000}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700/95 to-transparent z-50" />
              <div
                className="absolute flex flex-col justify-center left-[3%] top-2 w-1/2 h-full z-50 
              "
              >
                <h2 className="md:text-3xl sm:text-xl text-[18px] text-white font-bold">
                  Lorem ipsum, dolor adipisicing.
                </h2>
                <p className="md:text-xl text-[10px] text-slate-300 mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur suscipit placeat tempore fugit. Dolorem, beatae!
                </p>
              </div>
            </div>
          </CarouselItem> */}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Hero;
