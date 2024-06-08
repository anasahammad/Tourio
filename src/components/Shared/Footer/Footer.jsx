import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#071516] text-white ">
      <div className="container px-6 py-12 mx-auto">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
          <h1 className="text-xl font-semibold tracking-tight  md:mx-3 xl:text-2xl dark:text-white">
            Subscribe our newsletter to get updates.
          </h1>

          <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              <span>Sign Up Now</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="font-semibold  ">Quick Link</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link
                to="/"
                className="text-gray-400 transition-colors duration-300  hover:underline hover:text-white"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="text-gray-400 transition-colors duration-300  hover:underline hover:text-white"
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                className="text-gray-400 transition-colors duration-300  hover:underline hover:text-white"
              >
               Contact Us
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold ">Industries</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300  hover:underline hover:text-white"
              >
               Travel and Tours
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300  hover:underline hover:text-white"
              >
                Information Technology
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300  hover:underline hover:text-white"
              >
                Finance & Insurance
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold ">Services</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300  hover:underline hover:text-white"
              >
                Tour Guide
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300  hover:underline hover:text-white"
              >
                Outstanding Package
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300  hover:underline hover:text-white"
              >
                Best Services
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold ">Contact Us</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300  hover:underline hover:text-white"
              >
                +880 1608005838
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300  hover:underline hover:text-white"
              >
                info@tourio.com
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
        <Link to="/">
                                <h2 className='font-bold text-2xl flex font-dm-sans items-center gap-2'>
                                    <FaGlobe className='text-[#f37b63]'></FaGlobe>Tourio</h2>
                            </Link>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
            © Copyright 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
