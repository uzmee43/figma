import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    
      <section className="text-gray-600 body-font overflow-hidden bg-[#FBEBB5] w-full">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:w-4/5 mx-auto">
            
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 flex items-center justify-center text-center lg:text-left">
              <div className="text-center">
                <h1 className="text-gray-900 text-5xl title-font font-medium m-10">
                  Rocket single seater
                </h1>
                <Link href={"/shop"}>
                <button className=" ml-auto text-black py-2 px-6 focus:outline-none hover:bg-slate-200 rounded underline underline-offset-">
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
              className="lg:w-1/2 w-full lg:h-auto h-auto object-contain object-center rounded"
              src={"/Rocket single seater 1.png"}
            />
          </div>
        </div>
      </section>
    
  );
};

export default Hero;
