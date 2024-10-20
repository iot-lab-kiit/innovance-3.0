import React, { useState } from "react";
import Timer from "./Timer";
import { Bitter } from "@next/font/google";
import { Poppins } from "@next/font/google";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const bitter = Bitter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const TimerSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div
        className="relative bg-no-repeat bg-cover bg-bottom bg-[#101010]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgb(16, 16, 16) 0%, rgba(15, 15, 15, 0.53) 48%, rgb(16, 16, 16) 100%), url('/backgrounds/timer_bg.jpg')",
          opacity: 1,
        }}
      >
        <div className="w-full h-screen flex items-center gap-8 px-4 sm:px-8 lg:px-16">
          <div className="font-bitter flex items-center justify-center flex-col mx-auto mb-10 md:mb-20 text-white">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl ${bitter.className} text-center`}
            >
              HURRY UP!
            </h1>
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl ${bitter.className} text-center`}
            >
              RESERVE YOUR SPOT NOW
            </h1>
            <Timer launchDate="2024-11-08T17:00:00" />
            <div
              className="relative w-fit m-auto mt-8"
              onMouseEnter={() => {
                setIsHovered(!isHovered);
              }}
              onMouseLeave={() => {
                setIsHovered(!isHovered);
              }}
            >
              <motion.div
                animate={
                  isHovered
                    ? { width: 0, y: 0, opacity: 1 }
                    : { width: "100%", y: 0, opacity: 1 }
                }
                transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
                className="absolute w-full h-full bg-blue-500"
              ></motion.div>
              <motion.button
                animate={
                  isHovered
                    ? {
                        color: "#3b82f6",
                        borderColor: "#3b82f6",
                        y: 0,
                        opacity: 1,
                      }
                    : { y: 0, opacity: 1 }
                }
                transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
                whileHover={{ color: "#3b82f6", borderColor: "#3b82f6" }}
                className={`text-xs sm:text-base hover:font-semibold text-background border-background border w-fit m-auto py-3 px-7 ${poppins.className}`}
              >
                BUY TICKET
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TimerSection), { ssr: false });
