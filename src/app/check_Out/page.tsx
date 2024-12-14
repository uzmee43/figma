"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const CheckoutPage = () => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Sri Lanka',
    address: '',
    city: '',
    province: 'Western Province',
    zipCode: '',
    phone: '',
    email: '',
    textarea: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({
      ...billingDetails,
      [name]: value
    });
  };

  const handlePlaceOrder = () => {
    console.log('Order placed with details:', billingDetails);
  };

  return (
    <section>
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


    <div className="flex flex-col md:flex-row gap-10 p-4 md:p-10">
          

      
      {/* Billing Details */}
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-6">Billing details</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            value={billingDetails.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="lastName"
            value={billingDetails.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="companyName"
            value={billingDetails.companyName}
            onChange={handleChange}
            placeholder="Company Name (Optional)"
            className="border p-2 w-full col-span-2"
          />
          <select
            name="country"
            value={billingDetails.country}
            onChange={handleChange}
            className="border p-2 w-full col-span-2"
          >
            <option value="Sri Lanka">Sri Lanka</option>
          </select>
          <input
            type="text"
            name="address"
            value={billingDetails.address}
            onChange={handleChange}
            placeholder="Street address"
            className="border p-2 w-full col-span-2"
          />
          <input
            type="text"
            name="city"
            value={billingDetails.city}
            onChange={handleChange}
            placeholder="Town / City"
            className="border p-2 w-full"
          />
          <select
            name="province"
            value={billingDetails.province}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="Western Province">Western Province</option>
          </select>
          <input
            type="text"
            name="zipCode"
            value={billingDetails.zipCode}
            onChange={handleChange}
            placeholder="ZIP code"
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="phone"
            value={billingDetails.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border p-2 w-full col-span-2"
          />
          <input
            type="email"
            name="email"
            value={billingDetails.email}
            onChange={handleChange}
            placeholder="Email address"
            className="border p-2 w-full col-span-2"
          />
          <textarea
            typeof='textarea'
            name="text"
            value={billingDetails.email}
            onChange={handleChange}
            placeholder="Additional information"
            className="border p-2 w-full col-span-2"
          />
        </form>
      </div>

      {/* Order Summary */}
      <div className="w-full md:w-1/3"> 
      <div className='flex gap-x-32 pl-5'>
      <h2 className="text-2xl font-bold mb-6">Product</h2>
      <h2 className="text-2xl font-bold mb-6">Subtotal</h2>
      </div>
    
        <div className="border p-4">
          <div className="flex justify-between">
            <span>Asgaard sofa x 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mt-4">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mt-4 font-bold">
            <span>Total</span>
            <span className='text-[#B88E2F]'>Rs. 250,000.00</span>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Direct Bank Transfer</h2>
          <div>
            <p className="text-sm text-gray-600 mb-4">
            Make your payment directly into our bank account. Please use your Order ID as the payment reference.
             Your order will not be shipped until the funds have cleared in our account.
            </p> 
            <p className="text-sm text-gray-600 mb-4">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, 
            and for other purposes described in our <samp className='text-black font-semibold'>privacy policy.</samp>
            </p> 
            <label className="flex items-center mb-2">
              <input type="radio" name="paymentMethod" value="bankTransfer" className="mr-2" />
              Direct Bank Transfer
            </label>
            <label className="flex items-center mb-2">
              <input type="radio" name="paymentMethod" value="cashOnDelivery" className="mr-2" />
              Cash On Delivery
            </label>
          </div>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="border-2 text-black py-3 px-6 mt-6 w-[318px] rounded-2xl hover:bg-blue-300"
        >
          Place order
        </button>
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
   

    </section>
  );
};

export default CheckoutPage;
