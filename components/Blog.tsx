import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCaretRightFill } from "react-icons/bs";
import TransitionWrapper from "./TransitionWrapper";
import { blog } from "@/lib/data";

const Blog = () => {
  return (
    <section className=" relative w-full h-full max-w-[1200px] flex flex-col justify-start items-center gap-5 mx-auto py-32">
      <TransitionWrapper className="px-4 w-full flex flex-wrap justify-center gap-10">
        {blog.map((blog, index) => (
          <div
            className="flex flex-col items-start justify-center md:w-[350px] w-4/5 border border-black rounded-xl overflow-hidden gap-5"
            key={index}
          >
            <Image src={blog.src} alt={blog.alt} width={1000} height={1000} />
            <h2 className="text-2xl font-bold w-full px-6 ">{blog.header}</h2>
            <Link
              href={blog.link}
              className="text-[12px] text-blue-700 items-center px-6 pb-6 flex w-full"
            >
              READ MORE <BsCaretRightFill />
            </Link>
          </div>
        ))}
      </TransitionWrapper>
    </section>
  );
};

export default Blog;
