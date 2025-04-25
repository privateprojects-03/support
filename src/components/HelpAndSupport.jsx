import React from 'react';
import { BiSolidHome } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { PiCalendarDotsDuotone } from "react-icons/pi";

import { useNavigate } from 'react-router-dom';


function HelpAndSupport() {
  const sectionNames = ["Help Us To Improve", "Chat With Us", "About Us"];
  const sectionRoutes = [ "/improvehelp", "/chat", "/about"];
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-between"
      style={{
        backgroundImage: `url('./salon.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Navbar */}
      <nav className="w-full h-16 bg-pink-200 bg-opacity-50 flex items-center justify-between px-4">
        {/* Left Side - Red Circle */}
        {/* <div className="w-8 h-8 bg-red-500 rounded-full"></div> */}
        <div className='hover:bg-pink-300'><div className='rounded-full hover:bg-pink-300  justify-items center flex flex-col items-center'> <span className='rounded-full '><PiCalendarDotsDuotone size="27px" className='text-gray-600 ' /></span> <p className="text-black text-sm">Bookings</p> </div></div>

        {/* Center - Rounded Search Bar */}
        <div className="w-[60%] h-10 bg-white rounded-full flex items-center justify-center shadow-md ">
          
          <p className="text-gray-600 text-sm font-semibold">Kukas</p>
        </div>

        {/* Right Side - Placeholder */}
        {/* <div className="w-8 h-8 bg-gray-500 rounded-full"></div> */}
        <div className='hover:bg-gray-100'><div className='rounded-full hover:bg-gray-100  justify-items center flex flex-col items-center'> <span><FaUserAlt size="24px" className='text-gray-500' /> </span> <p className="text-gray-400">Profile</p> </div></div>
      </nav>

        {/* Main Content - Responsive Section Boxes */}
        <div className="flex flex-col flex-grow items-center justify-evenly cursor-pointer">
        {sectionNames.map((name, section) => (
          <div
            key={section}
            onClick={() => navigate(sectionRoutes[section])}
            // onClick={() => navigate(sectionRoutes[section])}

            className="w-[90%] max-w-md h-[15%] max-h-24 bg-pink-200 text-red-400 font-semibold flex items-center justify-center text-lg font-medium rounded-full hover hover:underline hover:text-pink-600"
          >
          {name}
          </div>
        ))}
      </div>


      {/* Nav bar */}
      <nav className="w-full h-16 bg-violet-200 bg-opacity-50 flex sm:hidden items-center justify-center relative">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full">
          <span className="w-14 h-14 bg-yellow-500 text-white rounded-full shadow-lg flex items-center justify-center text-2xl font-bold border-4 border-white">
            <BiSolidHome size="40px" className='text-white' />
          </span>
        </div>
      </nav>

      {/* Footer */}
      <footer className="hidden w-full h-16 bg-gray-800 text-white flex items-center justify-center">
        <p>&copy; 2025 Help & Support | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default HelpAndSupport;