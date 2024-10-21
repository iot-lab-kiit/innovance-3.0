"use client";

import React from "react";
import { motion } from "framer-motion";
import TimerSection from "../components/Timer/TimerSection";
import Footer from "../components/global/Footer";
import Star from "../components/global/Star";

const page = () => {
  return (
    <div>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mt-16 md:mt-20 lg:mt-24"
      >
        <div className="flex flex-col gap-4 md:gap-8 justify-center items-center">
          <div className="text-center text-blue-400 font-medium text-2xl font-poppins">
            Contact Us
          </div>
          <h1 className="text-center font-medium font-bitter text-4xl md:text-6xl lg:text-8xl">
            We&apos;re Here to Help
          </h1>
          <div className="w-1/2 text-center font-poppins">
            Have inquiries, partnership proposals, or just want to say hello? We
            are here to listen! Drop us a message, and our team will get back to
            you as soon as possible. Your feedback is valuable to us. Let&apos;s
            connect!
          </div>
        </div>
      </motion.div>
      <Star />
      <div className="mt-20 md:my-24 lg:my-28 mx-auto px-4 w-full flex flex-col md:flex-row gap-8 md:gap-14 justify-evenly items-center ">
        <div className="w-full md:w-1/3 p-6 rounded-2xl h-auto border border-gray-500 flex flex-col gap-3 justify-center items-center">
          <svg
            height="50"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="text-blue-500"
          >
            <path
              d="M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"
              fill="currentColor"
            />
          </svg>
          <p className="font-bitter">ADDRESS</p>
          <p className="font-poppins">San Jose, CA</p>
        </div>
        <div className="w-full md:w-1/3 p-6 rounded-2xl h-auto border border-gray-500 flex flex-col gap-3 justify-center items-center">
          <svg
            height="50"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="text-blue-500"
          >
            <path
              d="M 160 32 H 96 A 24 24 0 0 0 72 56 V 200 a 24 24 0 0 0 24 24 h 64 a 24 24 0 0 0 24 -24 V 56 A 24 24 0 0 0 160 32 Z m 8 168 a 8 8 0 0 1 -8 8 H 96 a 8 8 0 0 1 -8 -8 V 56 a 8 8 0 0 1 8 -8 h 64 a 8 8 0 0 1 8 8 Z M 216 88 v 80 a 8 8 0 0 1 -16 0 V 88 a 8 8 0 0 1 16 0 Z m 32 16 v 48 a 8 8 0 0 1 -16 0 V 104 a 8 8 0 0 1 16 0 Z M 56 88 v 80 a 8 8 0 0 1 -16 0 V 88 a 8 8 0 0 1 16 0 Z M 24 104 v 48 a 8 8 0 0 1 -16 0 V 104 a 8 8 0 0 1 16 0 Z"
              fill="currentColor"
            />
          </svg>
          <p className="font-bitter">PHONE</p>
          <p className="font-poppins">1234567890</p>
        </div>
        <div className="w-full md:w-1/3 p-6 rounded-2xl h-auto border border-gray-500 flex flex-col gap-3 justify-center items-center">
          <svg
            height="50"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="text-blue-500"
          >
            <path
              d="M 128 24 a 104 104 0 0 0 0 208 c 21.51 0 44.1 -6.48 60.43 -17.33 a 8 8 0 0 0 -8.86 -13.33 C 166 210.38 146.21 216 128 216 a 88 88 0 1 1 88 -88 c 0 26.45 -10.88 32 -20 32 s -20 -5.55 -20 -32 V 88 a 8 8 0 0 0 -16 0 v 4.26 a 48 48 0 1 0 5.93 65.1 c 6 12 16.35 18.64 30.07 18.64 c 22.54 0 36 -17.94 36 -48 A 104.11 104.11 0 0 0 128 24 Z m 0 136 a 32 32 0 1 1 32 -32 A 32 32 0 0 1 128 160 Z"
              fill="currentColor"
            />
          </svg>
          <p className="font-bitter">EMAIL</p>
          <p className="font-poppins">innovance@iot.kiit.in</p>
        </div>
      </div>
      <Star />
      <TimerSection />
      <Footer />
    </div>
  );
};

export default page;
