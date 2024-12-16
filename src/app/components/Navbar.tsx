import Link from 'next/link';
import React from 'react';
import { BiUserVoice } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-[#FBEBB5] [#FBEBB5] max-w-full w-full h-auto sm:h-[100px]">
        <div className="flex flex-wrap p-5 items-center sm:justify-between justify-center">
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center text-base justify-center gap-6 sm:gap-10">
            <Link href={"/"} className="hover:text-gray-900">Home</Link>
            <Link href={"/shop"} className="hover:text-gray-900">Shop</Link>
            <Link href={"/blog"} className="hover:text-gray-900">About</Link>
            <Link href={"/contact"} className="hover:text-gray-900">Contact</Link>
          </nav>

          {/* Icons Section */}
          <div className="flex gap-4 sm:gap-10 mt-4 sm:mt-0 justify-end">
            <BiUserVoice className="font-bold text-2xl sm:text-3xl" />
            <CiSearch className="font-bold text-2xl sm:text-3xl" />
            <IoIosHeartEmpty className="font-bold text-2xl sm:text-3xl" />
            <IoCartOutline className="font-bold text-2xl sm:text-3xl" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
