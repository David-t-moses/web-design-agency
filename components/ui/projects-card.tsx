import Image from "next/image";
import React from "react";

const ProjectCard = ({
  src,
  alt,
  title,
  desc,
}: {
  src: string;
  alt: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center cursor-pointer hover:scale-105 transition-all ease-in-out rounded-3xl">
      <div className="flex flex-col items-center justify-start w-[22rem] h-[28rem]  rounded-3xl border-2 border-black overflow-hidden">
        <Image src={src} alt={alt} width={1000} height={1000} />
      </div>
      <div className="flex flex-col items-center justify-center text-center w-[18rem]">
        <h1 className="text-xl font-bold ">{title}</h1>
        <p className="flex flex-col text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
