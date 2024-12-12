"use client"
import Image from "next/image";
import { useState } from "react";

type CartItem = {
  name: string;
  price: number;

 
  image: string;
  description: string;
  quantity: number;
};

export default function ProductPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const product = {
    name: "Asgaard sofa",
    price: 2500000,
    colors: ["#000000", "#4F46E5"],
 
    image: "/Asgaard sofa 1.png", 
    description:
      "Setting the bar as one of the loudest speakers...",
  };

  const addToCart = () => {
    setCart([{ ...product, quantity: 1 }]);
  };

  return (
    // // add img//
    // <section className="h-[3107px] w-[] bg-bannerImg bg-repeat bg-cover bg-bottom">


    
    <div className=" min-h-screen relative">
      <div className="absolute top-0 right-0 min-h-[746px] w-[417px] border-2 border-gray-200 bg-white shadow-lg mx-auto py-8 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-6">
        {/* Product Details */}
        <div className="lg:col-span-8">
          <div className="flex gap-4">
            {/* Thumbnail */}
            <div className="flex flex-col gap-4 bg-[]">
              <Image height={90} width={111}
                src={product.image}
                alt="Thumbnail"
                className="w-24 h-24 rounded-lg border"
              />
           
            </div>
            
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-4">
          <h1 className="text-1xl font-bold m-6">{product.name}</h1>
          <p className="text-gray-600 mt-2">Rs. {product.price.toLocaleString()}</p>
       <div className="flex justify-center items-center gap-4 mr-48">

       <button
            onClick={addToCart}
            className=" text-sm h-[31px] w-[131px] mt-[600px] px-6 py-2 border-2 border-gray-300 rounded-md text-black hover:bg-gray-800 justify-center items-center"
          >
            <span className="text-sm"> Checkout</span>
            {/* View Cart */}
          </button>
          <button
  className="flex justify-center items-center text-sm h-[31px] w-[131px] mt-[600px] px-10 py-2 border-2 border-gray-300 rounded-md text-black hover:bg-gray-800"
>
  <samp>Viewcard</samp>
</button>

       </div>
         
          
        </div>
      </div>

      {/* Cart Drawer */}
      {cart.length > 0 && (
        <div className="absolute top-0 right-0 min-h-[746px] w-[417px] border-2 border-gray-800 bg-white shadow-lg">
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="text-lg font-bold">Shopping Cart</h2>
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setCart([])}
            >
              ×
            </button>
          </div>
          <div className="p-4">
            {cart.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <Image
                width={100}
                height={100}
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-md font-medium">{item.name}</h3>
                  <p className="text-gray-600">
                    Rs. {item.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
            <p className="text-right mt-4 text-gray-800 font-bold">
              Subtotal: Rs.{" "}
              {cart.reduce((acc, item) => acc + item.price, 0).toLocaleString()}
            </p>
            <button className="mt-4 w-full py-2 border-2 border-gray-400 text-black rounded-md hover:bg-gray-800 hover:text-white">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
   

    // </section>
  );
}
