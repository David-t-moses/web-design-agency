import React from "react";
import TransitionWrapper from "./TransitionWrapper";
import { ContactForm } from "./ContactForm";

const Contact = () => {
  return (
    <section className="relative w-full flex flex-col justify-center items-center gap-5 mx-auto max-w-[1200px] h-full py-32 px-5">
      <div className="flex justify-between items-center w-full max-w-[1200px] h-full max-md:flex-col">
        <TransitionWrapper className="w-full h-full">
          <div className="flex flex-col px-4 pb-4 mx-auto items-center justify-center text-center w-4/5">
            <h1 className="text-3xl font-bold ">
              Let's Know how we can{" "}
              <span className="text-blue-700">Impact Your Online Presence</span>{" "}
            </h1>
          </div>
          <div className="flex flex-col p-8 mx-auto items-center justify-center bg-blue-200 h-full rounded-lg">
            <div className="flex flex-col mt-2 text-sm text-black/70 mb-3 w-full gap-8 max-sm:text-center">
              <h1 className="md:text-[42px] leading-[50px] text-3xl text-blue-700 font-black">
                100% Satisfaction Gauranteed
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati deleniti in aut possimus molestias velit iste
                excepturi, nostrum, nulla tempora sint officiis!
              </p>
              <div>
                <h2 className="text-3xl font-medium mb-3">
                  What will be the next step?
                </h2>
                <ul>
                  <li className="text-lg">We'll prepare the proposal</li>
                  <li className="text-lg">We'll discuss it together</li>
                  <li className="text-lg">let's start the discussion</li>
                </ul>
              </div>
            </div>
          </div>
        </TransitionWrapper>
        <TransitionWrapper className="w-full h-full">
          <div className="flex flex-col py-8 px-4 mx-auto items-center md:items-end md:pt-20 w-full">
            <ContactForm />
          </div>
        </TransitionWrapper>
      </div>
    </section>
  );
};

export default Contact;
