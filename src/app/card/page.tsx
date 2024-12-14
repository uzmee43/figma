"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 25000000;
  const subtotal = price * quantity;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 w-full">
      {/* Header Image */}
      <div className="w-full">
        <Image
          className="w-full object-cover"
          src="/Rectangle 1.png"
          height={100}
          width={1440}
          alt="Header"
        />
      </div>

      {/* Cart Section */}
      <div className="max-w-5xl mx-auto mt-20 p-4 sm:p-6">
        <div className="bg-white p-6 rounded shadow-md">
          {/* Cart Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="bg-[#FFF9E5] text-sm sm:text-base">
                  <th className="text-left px-2 sm:px-4 py-2">Product</th>
                  <th className="text-left px-2 sm:px-4 py-2">Price</th>
                  <th className="text-left px-2 sm:px-4 py-2">Quantity</th>
                  <th className="text-left px-2 sm:px-4 py-2">Subtotal</th>
                  <th className="text-left px-2 sm:px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm sm:text-base">
                  <td className="px-2 sm:px-4 py-2 flex items-center space-x-2 sm:space-x-4 bg-[#FBEBB5] mt-2 rounded-lg h-[106px] w-[106px]">
                    <Image
                      src="/Mask group (11).png"
                      alt="Asgaard sofa"
                      height={100}
                      width={100}
                      className=" w-12 sm:w-16 h-12 sm:h-16 object-cover rounded"
                    />
                    <span className="p-14">Asgaard sofa</span>
                  </td>
                  <td className="px-2 sm:px-4 py-20">Rs. {price.toLocaleString("en-PK")}</td>
                  <td className="px-2 sm:px-4 py-20">
                    <input
                      type="number"
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-12 border border-gray-300 rounded p-1 text-center"
                    />
                  </td>
                  <td className="px-4 py-2">Rs. {subtotal.toLocaleString("en-PK")}</td>
                  <td className="px-4 py-2 text-2xl text-[#FBEBB5]">
                    <AiFillDelete />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="flex flex-col items-end mt-8">
            <div className="w-full sm:w-64 bg-[#FFF9E5] p-4 rounded shadow-md">
              <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Subtotal</span>
                <span>Rs. {subtotal.toLocaleString("en-PK")}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-700 font-semibold">Total</span>
                <span className="text-yellow-500 font-bold">Rs. {subtotal.toLocaleString("en-PK")}</span>
              </div>
              <Link href={"/Check_Out"}>

              <button className="w-full border-2 hover:bg-yellow-600 text-black py-2 rounded-2xl font-semibold">
                Check Out
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <section className="text-gray-600 body-font bg-[#FAF4F4] mt-20 w-full">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/2 md:w-1/3 w-full">
              <h2 className="title-font font-medium sm:text-2xl text-xl text-gray-900">
                Free Delivery
              </h2>
              <p className="leading-relaxed text-sm text-[#9F9F9F] pt-3">
                For all orders over $50, consectetur adipim scing elit.
              </p>
            </div>
            <div className="p-4 sm:w-1/2 md:w-1/3 w-full">
              <h2 className="title-font font-medium sm:text-2xl text-xl text-gray-900">
                90 Days Return
              </h2>
              <p className="leading-relaxed text-sm text-[#9F9F9F] pt-3">
                If goods have problems, consectetur adipim scing elit.
              </p>
            </div>
            <div className="p-4 sm:w-1/2 md:w-1/3 w-full">
              <h2 className="title-font font-medium sm:text-2xl text-xl text-gray-900">
                Secure Payment
              </h2>
              <p className="leading-relaxed text-sm text-[#9F9F9F] pt-3">
                100% secure payment, consectetur adipim scing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
