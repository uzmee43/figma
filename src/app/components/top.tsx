import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Top = () => {
  return (
   <div>

   
          

 <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Top Picks For You
      </h1>
                <samp className='text-sm'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</samp>

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

                <Link href={"/shop"}>
                View More
                </Link>
               
      </h1>

                  </div>

                </div>

              </div>

            </section>



   </div>
  )
}

export default Top
