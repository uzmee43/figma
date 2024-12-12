import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Table = () => {
  return (
    <div className="bg-[#FAF4F4] w-full min-h-[672px] flex justify-center items-center">
      <div className="flex flex-col lg:flex-row m-5 p-2 gap-3 justify-center">
        {/* Right Side */}
        <div className="h-auto w-full lg:w-[605px] hover:border-2 border-gray-400 flex items-center justify-center">
          <div className="flex flex-row lg:flex-col items-center justify-start gap-4 p-4">
            {/* Image */}
            <div className="flex items-center justify-center">
              <Image
                src={"/table 1.png"}
                height={1641}
                width={1092}
                alt="image"
                className="object-contain max-h-[300px] md:max-h-[400px]"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start lg:items-center lg:text-center">
              <span className="font-bold text-3xl">Side table</span>
              <Link href={"/shop"}>
              <p className="underline underline-offset-2">View More</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Left Side */}
        <div className="h-auto w-full lg:w-[605px] hover:border-2 border-gray-400 flex items-center justify-center">
          <div className="flex flex-row lg:flex-col items-center justify-start gap-4 p-4">
            {/* Image */}
            <div className="flex items-center justify-center">
              <Image
                src={"/ottoman_3 1.png"}
                height={1055}
                width={1585}
                alt="image"
                className="object-contain max-h-[300px] md:max-h-[400px]"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start lg:items-center lg:text-center">
              <span className="font-bold text-3xl">Side table</span>
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
