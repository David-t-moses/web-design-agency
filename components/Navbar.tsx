import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 flex justify-center items-center w-full bg-white/70 backdrop-blur-md z-50 md:h-16 h-14">
      <div className="w-full max-w-[1200px] flex justify-between items-center gap-5 px-5">
        <div className="flex justify-between items-center">
          <Image src="/logo.png" alt="logo" width={70} height={70} />
          <p className="text-2xl font-bold max-[1300px]:hidden text-blue-600">
            KBIZ
          </p>
        </div>
        <div className="lg:flex justify-between items-center hidden ">
          <div className="flex justify-between items-center max-[1300px]:gap-5 gap-10">
            <Link
              href="/"
              className="font-medium cursor-pointer hover:text-blue-600 focus:text-neutral-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="font-medium cursor-pointer hover:text-blue-600 focus:text-neutral-600"
            >
              About us
            </Link>
            <Link
              href="/services"
              className="font-medium cursor-pointer hover:text-blue-600 focus:text-neutral-600"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="font-medium cursor-pointer hover:text-blue-600 focus:text-neutral-600"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="font-medium cursor-pointer hover:text-blue-600 focus:text-neutral-600"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="font-medium cursor-pointer hover:text-blue-600 focus:text-neutral-600"
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
              Connect <FaLongArrowAltRight />
            </Link>
          </Button>
        </div>
        <div className="max-[1023px]:flex justify-between items-center hidden">
          <DropDownMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
