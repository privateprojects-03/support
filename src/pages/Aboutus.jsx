import React from 'react';
import { IoMdHome } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BiSolidHome } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

function AboutUs() {

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // navigate back to the previous page
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-between bg-gradient-to-b from-pink-100 to-white">
      {/* Header */}
      <div className="w-full h-16 bg-pink-600 bg-opacity-80 text-white flex items-center justify-between px-4">
             <button onClick={handleBack} className="text-2xl font-bold"><IoMdArrowRoundBack /></button>
             <h1 className="text-lg font-semibold">About Us</h1>
             <div className="w-6 h-6" />
           </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center">
        <div className="w-full max-w-3xl bg-white bg-opacity-90 p-6 rounded-2xl shadow-xl text-gray-700 leading-7 space-y-4">
          <p className="text-lg font-semibold text-pink-600">
            Welcome to GlamHome – your personal salon at your doorstep!
          </p>
          <p>
            We started with one simple mission: to make professional beauty and grooming services
            accessible, affordable, and comfortable from the luxury of your home.
          </p>
          <p>
            No more waiting at salons or managing busy schedules. Whether it's a relaxing facial,
            trendy haircut, or a pre-party glam session – our certified experts bring everything
            you need right to your home.
          </p>
          <p>
            At GlamHome, we value hygiene, professionalism, punctuality, and above all – YOU. Every
            service is performed using clean, single-use kits and our staff follows strict safety
            protocols.
          </p>
          <p>
            We’re here to redefine the salon experience – to make beauty effortless, convenient, and
            personalized.
          </p>
          <p className="font-semibold text-pink-500">
            Thank you for choosing GlamHome. You’re not just booking a service, you’re booking
            comfort, confidence, and care.
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="sm:hidden w-full h-16 bg-pink-600 border-t flex justify-center items-center relative  ">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full">
                  <span className="w-14 h-14 bg-black text-white rounded-full shadow-lg flex items-center justify-center text-2xl font-bold border-3 border-white">
                    <BiSolidHome size="25px" className='text-white' />
                  </span>
                </div>
        {/* <button
          
          className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
        >
          <IoMdHome size="50px" />
        </button> */}
      </div>
    </div>
  );
}

export default AboutUs;
