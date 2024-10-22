import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="relative w-full flex flex-col justify-start items-center gap-5 mx-auto py-20 bg-blue-200 overflow-hidden">
      <div className="flex justify-between items-center w-full max-w-[1200px] flex-wrap px-8 max-[500px]:gap-5">
        <div className="flex flex-col justify-between items-center max-[500px]:w-[38%]">
          <div className="flex ">
            <Image src="/logo.png" alt="logo" width={80} height={80} />
          </div>
          <div className="flex w-full text-blue-700 text-xl font-bold mx-auto items-center justify-between gap-2">
            <span className="cursor-pointer hover:text-blue-600">
              <FaFacebook />
            </span>
            <span className="cursor-pointer hover:text-blue-500">
              <FaInstagram />
            </span>
            <span className="cursor-pointer hover:text-blue-500">
              <FaTwitter />
            </span>
            <span className="cursor-pointer hover:text-blue-500">
              <FaLinkedin />
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center max-[500px]:w-[38%]">
          <h2 className="text-lg md:text-xl font-semibold">Company</h2>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
        </div>
        <div className="flex  flex-col justify-between items-center">
          <h2 className="text-lg md:text-xl font-semibold">Designs</h2>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
        <div className="flex flex-col justify-between items-center max-[500px]:w-[38%]">
          <h2 className="text-lg md:text-xl font-semibold">Resources</h2>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div className="absolute -bottom-[130%] max-[500px]:-bottom-[138%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 h-full w-full rounded-[100%]" />
      <p className="absolute -bottom-0 text-[9px] md:text-lg left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/80">
        &copy; Copyrights, All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
