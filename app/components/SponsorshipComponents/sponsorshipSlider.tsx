"use client";

import { cn } from "@/libs/utils";
import React from "react";
import {BellIcon} from "lucide-react";
import {Poppins} from "@next/font/google";
import Marquee from "react-fast-marquee";


const poppins = Poppins({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});
export const SponsorshipSlider = ({
                                        items,
                                        className,
                                    }: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {


    return (
        <div
            className={cn(
                "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <Marquee
                speed={10}
                direction="right"
                autoFill={true}
                className="flex overflow-clip"
                pauseOnHover={true}
            >
                {items.map((item) => (
                    <li
                        className={`transition hover:text-white hover:scale-125 w-fit max-w-full relative flex-shrink-0 gap-2  px-8 py-6 flex items-center justify-center ${poppins.className} text-slate-400`}
                        key={item.name}

                    >
                        <BellIcon className={"scale-125"}/>
                        <span className={"text-xl font-bold"}>{item.name}</span>
                    </li>
                ))}
            </Marquee>
        </div>
    );
};
