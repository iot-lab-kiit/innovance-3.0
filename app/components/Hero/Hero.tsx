"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    setIsHovered(false);
  }, []);

  return (
    <div className="h-[80vh] md:h-screen bg-[#101010]">
      <div
        id="hero"
        className="h-[80vh] lg:h-3/4 flex justify-center items-center"
      >
        <div className="text-center flex flex-col gap-8">
          <motion.div
            className=" text-blue-500 text-2xl font-bitter"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
          >
            &#8226; 9th-10th November, 2024 &#8226;
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bitter"
          >
            Innovance 3.0
          </motion.div>
          <div
              className="relative w-fit m-auto mt-0 sm:mt-4 md:mt-8"
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
              <Link href="/registrations">
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
                  className={`text-xs sm:text-base hover:font-semibold text-background border-background border w-fit m-auto py-3 px-7 `}
                >
                  BUY TICKET
                </motion.button>
              </Link>
            </div>
        </div>
      </div>
      <div id="marquee" className="font-geistMono mt-2 md:mt-0">
        {" "}
        {/* Adjusted margin */}
        <div className="w-[calc(100vw+8px)] -left-[6px] -skew-x-[10deg] -rotate-[10deg] sm:-rotate-6 sm:-skew-x-6 md:-rotate-[4deg] md:-skew-x-[4deg] lg:-rotate-3 lg:-skew-x-3 bg-blue-500 absolute z-20 shadow-[0px_0px_10px_10px_#00000024]">
          <Marquee
            speed={30}
            direction="right"
            autoFill={true}
            className="py-3 bg-blue-500 select-none"
          >
            <span className="px-12 text-background">RESERVE YOUR SPOT NOW</span>
            <Image src="/icons/star.svg" width={15} height={15} alt="star" />
          </Marquee>
        </div>
        <div className="w-[calc(100vw+8px)] -left-[6px] skew-x-[10deg] rotate-[10deg] sm:rotate-6 sm:skew-x-6 md:rotate-[4deg]  md:skew-x-[4deg] lg:rotate-3 lg:skew-x-3 bg-blue-500 absolute z-10">
          <Marquee
            speed={20}
            direction="right"
            autoFill={true}
            className="py-3 bg-blue-500 select-none"
          >
            <span id="comingSoon" className="text-background">
              RESERVE YOUR SPOT NOW
            </span>
            <Image src="/icons/star.svg" width={15} height={15} alt="star" />
          </Marquee>
        </div>
      </div>
    </div>
  );
}
