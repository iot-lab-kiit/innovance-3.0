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
            Tickets
          </div>
          <h1 className="text-center font-medium font-bitter text-4xl md:text-6xl lg:text-8xl">
            Get Your FutureTech <br />
            Tickets Now!
          </h1>
          <div className="w-1/2 text-center font-poppins">
            Discover the next wave of innovation at FutureTech Conference.{" "}
            <br />
            Choose between Premium and Standard tickets to secure your spot.{" "}
            <br />
            Join us for a tech-filled experience that will redefine the future.
          </div>
        </div>
      </motion.div>
      <Star />

      {/* Registration Page */}

      <div className="min-h-screen flex items-center justify-center">
        <div className="p-10 rounded-lg shadow-lg max-w-4xl w-full text-white">
          <h1 className="text-center mb-10 font-medium font-bitter text-1xl md:text-5xl lg:text-6xl">
            Registration Form
          </h1>
          <form>
            <div className="flex mb-4 gap-4">
              {/* First Name */}
              <div className="w-[70%]">
                <input
                  className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="first_name"
                  placeholder="First Name"
                />
              </div>

              {/* Last Name */}
              <div className="w-[30%]">
                <input
                  className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="last_name"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <input
                className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="KIIT Email ID"
              />
            </div>

            <div className="flex mb-4 gap-4">
              {/* Phone */}
              <div className="w-[50%]">
                <input
                  className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>

              {/* WhatsApp */}
              <div className="w-[50%]">
                <input
                  className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="whatsapp"
                  placeholder="WhatsApp Number"
                />
              </div>
            </div>

            <div className="flex mb-4 gap-4">
              {/* Roll */}
              <div className="w-[70%]">
                <input
                  className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="roll"
                  placeholder="Roll number"
                />
              </div>

              {/* Branch */}
              <div className="w-[30%]">
                <input
                  className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="branch"
                  placeholder="Branch"
                />
              </div>
            </div>

            {/* Year */}
            <div className="mb-4">
              <input
                className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="year"
                placeholder="Enter your year"
              />
            </div>

            {/* Transaction ID */}
            <div className="mb-4">
              <input
                className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="txn_id"
                placeholder="Transaction ID"
              />
            </div>

            {/* Total Fare */}
            {/* <div className="mb-4">
              <input
                className="w-full px-4 py-4 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="total_fare"
                placeholder="Enter the total fare"
              />
            </div> */}

            {/* Type */}
            {/* <div className="mb-4">
              <select
                className="w-full px-4 py-2 bg-[#171717] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="type"
              >
                <option value="offline">Offline</option>
                <option value="online">Online</option>
              </select>
            </div> */}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg font-bitter transition duration-300"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>



      <Star />
      <TimerSection />
      <Footer />
    </div>
  );
};

export default page;
