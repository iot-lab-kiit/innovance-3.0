"use client";

import React from "react";
import { motion } from "framer-motion";
import TimerSection from "../components/Timer/TimerSection";
import Footer from "../components/global/Footer";
import Star from "../components/global/Star";
import RegistrationFormInternal from "../components/Registration/RegistrationFormInternal";

const Page = () => {
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
          <div className="w-[80vw] md:w-3/2 text-center font-poppins font-light xl:text-lg">
            at 199/- for first 100 registrations! else 249/-{" "}
           </div>
          <div className="w-[80vw] md:w-3/2 text-center font-poppins font-light xl:text-lg">
            Discover the next wave of innovation at FutureTech Conference.{" "}
            <br />
            Choose between Premium and Standard tickets to secure your spot.{" "}
            <br />
            Join us for a tech-filled experience that will redefine the future.
          </div>
        </div>
      </motion.div>
      <Star />

      <RegistrationFormInternal />

      <Star />
      <TimerSection text1="HURRY!" text2="RESERVE YOUR SPOTS NOW" />
      <Footer />
    </div>
  );
};

export default Page;
