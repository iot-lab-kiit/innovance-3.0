"use client";

import {SponsorshipSlider} from "@/app/components/SponsorshipComponents/sponsorshipSlider";
import {motion} from "framer-motion";
import React, {useState} from "react";
import {Poppins} from "@next/font/google";

const poppins = Poppins({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];
export default function SponsorshipSection() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="bg-black text-white p-4 flex flex-col w-full items-center">
            <div className="container mx-auto py-16 flex flex-col md:flex-row justify-evenly items-center">
                <div className={"w-full md:w-[40%]"}>
                    <h2 className="text-4xl font-bold mb-8 ">Sponsors</h2>
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