import React from "react";
import Timer from "./Timer";
import { Bitter } from "@next/font/google";
import { Poppins } from "@next/font/google";

const bitter = Bitter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const TimerSection = () => {
  return (
    <div>
      <div
        className="relative bg-no-repeat bg-cover bg-bottom bg-[#101010]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgb(16, 16, 16) 0%, rgba(15, 15, 15, 0.53) 48%, rgb(16, 16, 16) 100%), url('/timer_bg.jpg')",
          opacity: 1,
        }}
      >
        <div className="w-full h-screen flex items-center px-4 sm:px-8 lg:px-16">
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
            <button
              className={`group relative mt-6 sm:mt-8 md:mt-10 px-3 sm:px-4 py-1.5 sm:py-2.5 bg-lime-500 text-black text-xs sm:text-sm md:text-base ${poppins.className} border-2 border-transparent transition-all duration-500 overflow-hidden`}
            >
              <span className="inline-block w-4 h-[1.3px] bg-black mr-2 align-middle"></span>
              <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-[#32cd32]">
                BUY TICKET
              </span>
              <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
              <style jsx>{`
                button:hover {
                  border-color: #32cd32; /* green border on hover */
                }
              `}</style>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerSection;
