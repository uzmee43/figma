import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sofa = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden bg-[#FFF9E5]">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image height={100} width={100}
            alt="image"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/Asgaard sofa 1.png"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 text-center mt-32">
          <p className="text-sm">New Arrivals</p>
              Asgaard sofa
            </h1>

            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <Link href={"/sofa"}> 
              <button className="flex ml-auto text-black py-2 px-6 border-2 border-gray-500 focus:outline-none hover:bg-indigo-400 rounded justify-center items-center">
                Order Now
              </button>
              
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sofa;
