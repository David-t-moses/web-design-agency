"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import TransitionWrapper from "./TransitionWrapper";

const Head = ({
  heading,
  className,
  paragraph,
  paragraphClassName,
}: {
  heading: string;
  className?: string;
  paragraph?: string;
  paragraphClassName?: string;
}) => {
  return (
    <TransitionWrapper className="w-full">
      <div
        className={cn(
          "flex flex-col py-8 px-4 mx-auto items-center justify-center w-full text-center",
          className
        )}
      >
        <h1 className="md:text-3xl sm:text-2xl text-xl font-bold">{heading}</h1>
        <p
          className={cn(
            "flex flex-col md:text-2xl sm:text-xl text-sm ",
            paragraphClassName
          )}
        >
          {paragraph}
        </p>
      </div>
    </TransitionWrapper>
  );
};

export default Head;
