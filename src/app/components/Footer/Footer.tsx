import { FaBurger, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="pt-10 pb-6 bg-gray-900">
      <div className="w-full md:w-[80%] pb-6 border-b border-gray-300 border-opacity-50 mx-auto grid
      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">

        {/* 1st Part Footer Section */}
        <div>
          {/* logo */}
          <div className="flex items-center space-x-2">
            <FaBurger className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500"/>
            <h1 className="text-2xl sm:text-3xl text-white font-semibold">BurgerBite</h1>
          </div>
          {/* description */}
          <p className="text-white text-opacity-60 mt-2">
            Delicious, fresh burgers made with quality ingredients, served quickly, daily.
          </p>
          {/* email */}
          <p className="mt-4 text-white">support@gmail.com</p>
          {/* phone-Number */}
          <p className="text-red-300 text-lg font-bold">+(123) 2346 87378</p>
        </div>

        {/* 2nd Part Footer Section */}
        <div>
          <h1 className="text-xl font-semibold mb-4 text-white">Products</h1>
          <p className="mt-2 text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer">Chicken Burger</p>
          <p className="mt-2 text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer">Classic Burger</p>
          <p className="mt-2 text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer">Delight Burger</p>
          <p className="mt-2 text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer">Beef Burger</p>
          <p className="mt-2 text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer">Classic Burger</p>
        </div>

        {/* 3rd Part Footer Section */}
        <div>
          <h1 className="text-xl font-semibold mb-4 text-white">Quick Links</h1>
          <p className="mt-2 text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer">Home</p>
          <p className="mt-2 text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer">About</p>
          <p className="mt-2 text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer">Menu</p>
          <p className="mt-2 text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer">Products</p>
          <p className="mt-2 text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer">Newsletter</p>
        </div>

        {/* 4th Part Footer Section */}
        <div>
          <h1 className="text-xl font-semibold mb-4 text-white">Opening Hours</h1>
          <p className="text-white">Monday - Friday: <span className="text-yellow-300">8am - 4pm</span></p>
          <p className="text-white">Saturday: <span className="text-yellow-300">8am - 12am</span></p>

          {/* social icons */}
          <div className="flex mt-6 space-x-4">
            <FaFacebook className="w-6 h-6 text-blue-500"/>
            <FaInstagram className="w-6 h-6 text-red-600"/>
            <FaLinkedin className="w-6 h-6 text-blue-600"/>
            <FaTwitter className="w-6 h-6 text-blue-400"/>
          </div>
        </div>
      </div>

      {/* Copyright Text */}
      <p className="text-center text-white opacity-50 mt-4">
        Copyright © <span className="text-yellow-300">2024-Code-with-ayan</span> All rights reserved
      </p>
    </div>
  );
}

export default Footer;
