import React from "react";
import TransitionWrapper from "./TransitionWrapper";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const OurAgency = () => {
  return (
    <section className="relative w-full flex flex-col justify-start items-center gap-5 mx-auto py-14 bg-blue-200">
      <div className="flex justify-between items-center w-full max-w-[1200px] max-md:flex-col">
        <TransitionWrapper className="w-full">
          <div className="flex flex-col py-8 px-4 mx-auto items-start justify-start">
            <h1 className="md:text-3xl sm:text-2xl text-xl font-bold pl-5">
              Our <span className="text-blue-700">Agency</span>
            </h1>
            <p className="flex flex-col mt-2 md:text-xl sm:text-sm text-[13px] text-black/70 mb-3 px-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              nostrum fuga quo voluptate accusamus corrupti accusantium
              reiciendis voluptatibus cum! Nostrum reprehenderit deleniti
              dolorem. <br />
              Dolore, cum neque porro sed officiis vel soluta! Rem autem,
              laudantium nostrum explicabo, quae nemo eos, quasi ipsum fugit
              quia aut velit veniam impedit aspernatur. Expedita inventore
              atque, nisi dolorum qui eaque ex doloremque dolor id quas.
            </p>
            <div className="px-5">
              <Button
                asChild
                className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer rounded-[7px]"
              >
                <Link href="#">Read more </Link>
              </Button>
            </div>
          </div>
        </TransitionWrapper>
        <TransitionWrapper className="w-full">
          <div className="flex flex-col py-8 px-4 mx-auto items-center justify-center text-center w-[75%]">
            <Image
              src="/3d-agency-img.png"
              alt="agency-img"
              width={500}
              height={500}
            />
          </div>
        </TransitionWrapper>
      </div>
    </section>
  );
};

export default OurAgency;
