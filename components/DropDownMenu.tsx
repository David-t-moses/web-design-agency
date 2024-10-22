import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

const DropDownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FaBars className="text-2xl cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col justify-between items-start gap-1 bg-white">
        <DropdownMenuItem>
          <Link
            href="#"
            className="font-semibold cursor-pointer hover:text-blue-600 focus:text-neutral-600 py-2"
          >
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="#"
            className="font-semibold cursor-pointer hover:text-blue-600 focus:text-neutral-600 py-2"
          >
            Services
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="#"
            className="font-semibold cursor-pointer hover:text-blue-600 focus:text-neutral-600 py-2"
          >
            About us
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="#"
            className="font-semibold cursor-pointer hover:text-blue-600 focus:text-neutral-600 py-2"
          >
            Portfolio
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="#"
            className="font-semibold cursor-pointer hover:text-blue-600 focus:text-neutral-600 py-2"
          >
            Blog
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="#"
            className="font-semibold cursor-pointer hover:text-blue-600 focus:text-neutral-600 py-2"
          >
            Contact us
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
      {/* <div className="lg:flex justify-between items-center hidden ">
        
          <li className="font-semibold cursor-pointer hover:text-blue-600 focus:text-neutral-600">
            Home
          </li>
          <li className="font-semibold cursor-pointer hover:text-blue-600 focus:text-neutral-600">
            Services
          </li>
          <li className="font-semibold cursor-pointer hover:text-blue-600 focus:text-neutral-600">
            About us
          </li>
          <li className="font-semibold cursor-pointer hover:text-blue-600 focus:text-neutral-600">
            Portfolio
          </li>
          <li className="font-semibold cursor-pointer hover:text-blue-600 focus:text-neutral-600">
            Blog
          </li>
          <li className="font-semibold cursor-pointer hover:text-blue-600 focus:text-neutral-600">
            Contact us
          </li>
        </ul>
      </div> */}
    </DropdownMenu>
  );
};

export default DropDownMenu;
