"use client";

import {SponsorshipSlider} from "@/app/components/SponsorshipComponents/sponsorshipSlider";
import {motion} from "framer-motion";
import React, {useState} from "react";
import {Poppins} from "@next/font/google";
import {testimonials} from "@/libs/testimonialsData";

const poppins = Poppins({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});


export default function SponsorshipSection() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`bg-black text-white p-4 flex flex-col w-full items-center ${poppins.className}`}>
            <div className=" py-16 flex flex-col md:flex-row justify-evenly items-center ">
                <div className={"w-full md:w-[40%]"}>
                    <h2 className="text-5xl  mb-8 font-bitter">Sponsors</h2>
                    <p className="text-lg mb-4">
                        Our journey of innovation is powered by the unwavering support of our incredible sponsors. Join
                        us
                        as we pave the way for a future of limitless possibilities.
                    </p>
                </div>
                <div className="flex justify-start md:justify-center w-full md:w-fit">
                    <div
                        className="relative w-fit m-auto"
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
                                    ? {width: 0, y: 0, opacity: 1}
                                    : {width: "100%", y: 0, opacity: 1}
                            }
                            transition={{duration: 0.5, ease: [0.17, 0.55, 0.55, 1]}}
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
                                    : {y: 0, opacity: 1}
                            }
                            transition={{duration: 0.5, ease: [0.17, 0.55, 0.55, 1]}}
                            whileHover={{color: "#3b82f6", borderColor: "#3b82f6"}}
                            className={`text-xs sm:text-base hover:font-semibold text-background border-background border w-fit m-auto py-3 px-7 ${poppins.className}`}
                        >
                            Become a Sponsor
                        </motion.button>
                    </div>
                </div>
            </div>
            <div
                className="w-full md:w-[60%] flex justify-center ">
                <SponsorshipSlider
                    items={testimonials}
                    direction="left"
                    speed="slow"
                />
            </div>
        </div>
    );
}