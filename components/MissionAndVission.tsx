import React from "react";
import TransitionWrapper from "./TransitionWrapper";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const MissionAndVission = () => {
  return (
    <section className=" relative w-full max-w-[1200px] flex flex-col justify-start items-center gap-5 py-15 px-5">
      <div className="flex max-md:flex-col items-center justify-between w-full gap-10">
        <TransitionWrapper className="w-full flex flex-wrap justify-center py-7 max-[1023px]:gap-20 gap-5">
          <div className="flex flex-col items-center justify-center w-[28rem] sm:h-[30rem]  p-5 bg-white  rounded-3xl border border-blue-60">
            <div className="flex w-full flex-col gap-3">
              <h2 className="text-2xl font-medium text-blue-700">Mission</h2>
              <p className="flex flex-col text-[16px] text-black italic">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laborum numquam natus qui, recusandae excepturi sequi amet
                ratione nihil numquam natus qui, recusandae excepturi sequi amet
                ratione nihil numquam natus qui, recusandae excepturi sequi amet
                ratione nihil
                <br />
                <br />
                Quam quibusdam sed cum eum modi ea corrupti Quam quibusdam sed
                cum sunt corporis impedit atque voluptate architecto sed quo
                dolore a eum modi ea corrupti sunt corporis impedit atque
                voluptate architecto sed quo dolore a eum modi ea corrupti
                <br />
                <br />
                incidunt soluta excepturi. Consequatur soluta architecto
                voluptas! incidunt soluta excepturi. Consequatur soluta
                architecto voluptas!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[28rem] sm:h-[30rem]  p-5 bg-white  rounded-3xl border border-blue-60">
            <div className="flex w-full flex-col gap-3">
              <h2 className="text-2xl font-medium text-blue-700">Vission</h2>
              <p className="flex flex-col text-[16px] text-black italic">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laborum numquam natus qui, recusandae excepturi sequi amet
                ratione nihil numquam natus qui, recusandae excepturi sequi amet
                ratione nihil numquam natus qui, recusandae excepturi sequi amet
                ratione nihil
                <br />
                <br />
                Quam quibusdam sed cum eum modi ea corrupti Quam quibusdam sed
                cum sunt corporis impedit atque voluptate architecto sed quo
                dolore a eum modi ea corrupti sunt corporis impedit atque
                voluptate architecto sed quo dolore a eum modi ea corrupti
                <br />
                <br />
                incidunt soluta excepturi. Consequatur soluta architecto
                voluptas! incidunt soluta excepturi. Consequatur soluta
                architecto voluptas!
              </p>
            </div>
          </div>
        </TransitionWrapper>
      </div>
    </section>
  );
};

export default MissionAndVission;
