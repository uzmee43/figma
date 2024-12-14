import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      
      <section className="text-gray-600 body-font overflow-hidden bg-[#FFF9E5]">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              height={500}
              width={553}
              alt="image"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="/Mask group (11).png"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Asgaard sofa <br />
                <span className="text-sm text-[#9F9F9F]">Rs. 250,000.00</span>
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FFDA5B]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FFDA5B]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FFDA5B]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FFDA5B]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FFDA5B]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <p>5 Customer Review</p>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 bg-[#816DFA] rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-[#CDBA7B] rounded-full w-6 h-6 focus:outline-none" />
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <button className="flex ml-auto text-black border-2 border-gray-600 py-2 px-6 focus:outline-none hover:bg-indigo-200 rounded">
                  - 1 +
                </button>
                <Link href={"/card_sidebar"}>
                  <button className="w-[215px] h-[64px] p-0 border-[1px] hover:border-gray-600 rounded-lg inline-flex items-center justify-center text-gray-500 ml-4">
                    Add To Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* add other section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Description&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-[#9F9F9F]">Additional Information</span>
              &nbsp;&nbsp;&nbsp;{" "}
              <span className="text-[#9F9F9F]">Reviews [5]</span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.. <br />
              <br />
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
          <div className="flex flex-wrap -m-5 text-center gap-5 justify-center items-center">
            <div className="p-4 md:w-1/3 sm:w-1/1 w-[657px] h-[348px] bg-[#FFF9E5] hover:border-2 hover:border-gray-300">
              <div className="px-4 py-6 rounded-lg">
                <Image
                  src={"/Mask group (14).png"}
                  height={348}
                  width={605}
                  alt="img"
                ></Image>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/1 w-[657px] h-[348px] bg-[#FFF9E5] hover:border-2 hover:border-gray-300">
              <div className=" px-4 py-6 rounded-lg">
                <Image
                  height={348}
                  width={605}
                  src={"/cottoman_1 1.png"}
                  alt="imag"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* add other section */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Related Products
              </h1>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="Image"
                  height={100}
                  width={100}
                  className="object-cover object-center w-full h-full block"
                  src="/Mask group.png"
                />
              </a>
              <div className="mt-4">
                <p className="text-gray-900 title-font text-lg font-medium">
                  Trenton modular sofa_3
                </p>
                <p className="mt-1">Rs. 25,000.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  height={100}
                  width={100}
                  alt="img"
                  className="object-cover object-center w-full h-full block"
                  src="/Mask group (1).png"
                />
              </a>
              <div className="mt-4">
                <p className="text-gray-900 title-font text-lg font-medium">
                  Granite dining table with dining chair
                </p>
                <p className="mt-1">Rs. 25,000.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  height={100}
                  width={100}
                  alt="img"
                  className="object-cover object-center w-full h-full block"
                  src="/Mask group (2).png"
                />
              </a>
              <div className="mt-4">
                <p className="text-gray-900 title-font text-lg font-medium">
                  Outdoor bar table and stool
                </p>
                <p className="mt-1">Rs. 25,000.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="img"
                  height={100}
                  width={100}
                  className="object-cover object-center w-full h-full block"
                  src="/chair.png"
                />
              </a>
              <div className="mt-4">
                <p className="text-gray-900 title-font text-lg font-medium">
                  Plain console with teak mirror
                </p>
                <p className="mt-1">Rs. 25,000.00</p>
              </div>
            </div>

            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-sm text-sm font-medium title-font mb-4 text-gray-900 underline underline-offset-2">
                View More
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
