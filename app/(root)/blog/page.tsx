import Blog from "@/components/Blog";
import TransitionWrapper from "@/components/TransitionWrapper";
import React from "react";

const blog = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <TransitionWrapper className="flex flex-col w-full p-10 bg-blue-700 mt-[62px] text-white max-w-[1200px] items-center justify-center md:rounded-2xl ">
        <h1 className="text-3xl font-bold">The Web Design Blog</h1>
      </TransitionWrapper>

      <Blog />
    </div>
  );
};

export default blog;
