import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 hidden left-0 lg:flex justify-center items-center w-full bg-white/70 backdrop-blur-md z-50 md:h-16 h-14 border-b">
      <div className="w-full max-w-[1200px] flex justify-between items-center gap-5 px-5">
        <Link href="/" className="flex justify-between items-center">
          <Image src="/logo.png" alt="logo" width={70} height={70} />
          <p className="text-2xl font-bold max-[1300px]:hidden text-blue-600">
            KBIZ
          </p>
        </Link>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center max-[1300px]:gap-5 gap-10">
            <Link
              href="/"
              className="font-medium cursor-pointer hover:text-blue-600 focus:text-blue-700"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="font-medium cursor-pointer hover:text-blue-600 focus:text-blue-700"
            >
              About us
            </Link>
            <Link
              href="/services"
              className="font-medium cursor-pointer hover:text-blue-600 focus:text-blue-700"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="font-medium cursor-pointer hover:text-blue-600 focus:text-blue-700"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="font-medium cursor-pointer hover:text-blue-600 focus:text-blue-700"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="font-medium cursor-pointer hover:text-blue-600 focus:text-blue-700"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="lg:flex justify-between items-center hidden">
          <Button
            asChild
            className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer rounded-[7px]"
          >
            <Link href="#">
              Get Started <FaLongArrowAltRight />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
