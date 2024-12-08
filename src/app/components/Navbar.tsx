import Link from 'next/link';
import React from 'react';
import { BiUserVoice } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-[#FBEBB5] w-full">
        <div className="container mx-auto flex flex-wrap p-5 flex-col sm:flex-row items-center">
          {/* Navigation Links */}
          <nav className="sm:ml-auto sm:mr-auto flex flex-wrap items-center text-base justify-center gap-6 sm:gap-10">
            <Link href={"/"} className="hover:text-gray-900">Home</Link>
            <Link href={"/shop"} className="hover:text-gray-900">Shop</Link>
            <Link href={"/about"} className="hover:text-gray-900">About</Link>
            <Link href={"/contact"} className="hover:text-gray-900">Contact</Link>
          </nav>

          {/* Icons Section */}
          <div className="flex gap-4 sm:gap-10 mt-4 sm:mt-0">
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
