import React from "react";
import TransitionWrapper from "./TransitionWrapper";
import Image from "next/image";

const OurServices = () => {
  return (
    <section className=" relative w-full max-w-[1200px] flex flex-col justify-start items-center gap-5 mx-auto py-32 px-5">
      <TransitionWrapper className="w-full">
        <div className="flex flex-col py-8 px-4 mx-auto items-center justify-center text-center w-4/5">
          <h1 className="text-3xl font-bold ">
            What Our <span className="text-blue-700">Web Design Services</span>{" "}
            Entails!
          </h1>
          <p className="flex flex-col md:text-sm text-[10px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum it amet consectetur ad.
          </p>
        </div>
      </TransitionWrapper>
      <TransitionWrapper className="w-full flex flex-wrap justify-center py-7 max-[1023px]:gap-20 gap-5">
        <div className="flex flex-col items-center justify-start w-[28rem] sm:h-[42rem]   p-5 bg-white  rounded-3xl border border-blue-60">
          <div>
            <Image
              src="/web-dev-icon.png"
              alt="web-design"
              width={200}
              height={200}
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <h2 className="text-2xl font-semibold text-blue-700">
              Web Design and Development
            </h2>
            <p className="flex flex-col text-[16px] text-black ">
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
        </div>
        <div className="flex flex-col items-center justify-start w-[28rem] sm:h-[42rem]   p-5 bg-white  rounded-3xl border border-blue-60">
          <div>
            <Image
              src="/uiux-icon.png"
              alt="web-design"
              width={200}
              height={200}
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <h2 className="text-2xl font-semibold text-blue-700">
              UI/UX Design
            </h2>
            <p className="flex flex-col text-[16px] text-black ">
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
        </div>
        <div className="flex flex-col items-center justify-start w-[28rem] sm:h-[42rem]   p-5 bg-white  rounded-3xl border border-blue-60">
          <div>
            <Image src="/seo-icon.png" alt="seo" width={200} height={200} />
          </div>
          <div className="flex w-full flex-col gap-2">
            <h2 className="text-2xl font-semibold text-blue-700">
              Search Engine Optimisation (SEO)
            </h2>
            <p className="flex flex-col text-[16px] text-black ">
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
        </div>
        <div className="flex flex-col items-center justify-start w-[28rem] sm:h-[42rem]   p-5 bg-white  rounded-3xl border border-blue-60">
          <div>
            <Image
              src="/web-maintenance-icon.png"
              alt="web-maintainance"
              width={200}
              height={200}
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <h2 className="text-2xl font-semibold text-blue-700">
              Website Maintainance and Support
            </h2>
            <p className="flex flex-col text-[16px] text-black ">
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
        </div>
        <div className="flex flex-col items-center justify-start w-[28rem] sm:h-[42rem]   p-5 bg-white  rounded-3xl border border-blue-60">
          <div>
            <Image
              src="/web-hosting-icon.png"
              alt="web hosting"
              width={200}
              height={200}
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <h2 className="text-2xl font-semibold text-blue-700">
              Web Hosting and Domain Management
            </h2>
            <p className="flex flex-col text-[16px] text-black ">
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
        </div>
        <div className="flex flex-col items-center justify-start w-[28rem] sm:h-[42rem]   p-5 bg-white  rounded-3xl border border-blue-60">
          <div>
            <Image
              src="/web-dev-icon.png"
              alt="web-design"
              width={200}
              height={200}
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <h2 className="text-2xl font-semibold text-blue-700">
              Social Media Marketing
            </h2>
            <p className="flex flex-col text-[16px] text-black ">
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
        </div>
      </TransitionWrapper>
    </section>
  );
};

export default OurServices;
