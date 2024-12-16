import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Table = () => {
  return (
    <div className="bg-[#FAF4F4] max-w-full w-full min-h-[672px] flex justify-center items-center">
    <div className="flex flex-col lg:flex-row m-5 p-2 gap-3 justify-center w-full max-w-6xl">
      {/* Right Side */}
      <div className="h-auto w-full lg:w-1/2 hover:border-2 border-gray-400 flex items-center justify-center">
        <div className="flex flex-col lg:flex-col items-center justify-start gap-4 p-4">
          {/* Image */}
          <div className="flex items-center justify-center w-full">
            <Image
              src={"/table 1.png"}
              height={1641}
              width={1092}
              alt="Side table"
              className="object-contain max-w-full max-h-[300px] sm:max-h-[400px] h-auto"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col items-center lg:items-center text-left lg:text-center">
            <span className="font-bold text-2xl sm:text-3xl">Side table</span>
            <Link href={"/shop"}>
              <p className="underline underline-offset-2">View More</p>
            </Link>
          </div>
        </div>
      </div>
  
      {/* Left Side */}
      <div className="h-auto w-full lg:w-1/2 hover:border-2 border-gray-400 flex items-center justify-center">
        <div className="flex flex-col lg:flex-col items-center justify-start gap-4 p-4">
          {/* Image */}
          <div className="flex items-center justify-center w-full">
            <Image
              src={"/ottoman_3 1.png"}
              height={1055}
              width={1585}
              alt="Ottoman"
              className="object-contain max-w-full max-h-[300px] sm:max-h-[400px] h-auto"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col items-center lg:items-center text-left lg:text-center">
            <span className="font-bold text-2xl sm:text-3xl">Ottoman</span>
            <Link href={"/shop"}>
              <p className="underline underline-offset-2">View More</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Table;
