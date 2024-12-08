import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    
      <section className="text-gray-600 body-font overflow-hidden bg-[#FBEBB5]">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-20 lg:mb-0 flex items-center justify-center">
              <div className="text-center">
                <h1 className=" text-gray-900 text-5xl title-font font-medium m-10">
                  Rocket single seater
                </h1>
                <Link href={"/shop"}>
                <button className="ml-auto text-black py-2 px-6 focus:outline-none hover:bg-slate-200 rounded underline underline-offset-2">
                  Shop Now
                </button>
                </Link>
               
              </div>
            </div>
            {/* Image Section */}
            <Image
              alt="imagecd"
              height={200}
              width={200}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={"/Rocket single seater 1.png"}
            />
          </div>
        </div>
      </section>
    
  );
};

export default Hero;
