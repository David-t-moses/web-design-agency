import React from "react";
import TransitionWrapper from "./TransitionWrapper";
import Image from "next/image";

const WhyInvestWithUs = () => {
  return (
    <section className=" relative w-full max-w-[1200px] flex flex-col justify-start items-center gap-5 py-10 px-5">
      <div className="flex max-md:flex-col-reverse px-4 items-center justify-between text-center w-full gap-10">
        <TransitionWrapper>
          <div className="flex flex-col py-8 px-4 justify-center w-full gap-5">
            <h1 className="text-3xl text-left font-bold ">
              Why Invest in{" "}
              <span className="text-blue-700">
                Professional Web Design Solutions
              </span>{" "}
            </h1>
            <p className="flex flex-col text-[16px] text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              numquam natus qui, recusandae excepturi sequi amet ratione nihil
              numquam natus qui, recusandae excepturi sequi amet ratione nihil
              numquam natus qui, recusandae excepturi sequi amet ratione nihil
              <br />
              <br />
              Quam quibusdam sed cum eum modi ea corrupti Quam quibusdam sed cum
              sunt corporis impedit atque voluptate architecto sed quo dolore a
              eum modi ea corrupti sunt corporis impedit atque voluptate
              architecto sed quo dolore a eum modi ea corrupti
              <br />
              <br />
              incidunt soluta excepturi. Consequatur soluta architecto voluptas!
              incidunt soluta excepturi. Consequatur soluta architecto voluptas!
            </p>
          </div>
        </TransitionWrapper>
        <TransitionWrapper>
          <div className="w-full">
            <Image
              src="/3d-office-1.avif"
              alt="invest in professional web design"
              width={1400}
              height={1400}
              className="rounded-2xl"
            />
          </div>
        </TransitionWrapper>
      </div>
    </section>
  );
};

export default WhyInvestWithUs;
