"use client";

import {cn} from "@/libs/utils";
import React from "react";
import Marquee from "react-fast-marquee";

export const TestimonialsSlider = ({
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
                "relative h-fit z-20  w-full overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <Marquee
                speed={20}
                direction="right"
                autoFill={true}
                className="flex h-[400px]"
                pauseOnHover={true}
            >
                {items.map((item) => (
                    <li
                        className="transition w-[350px] h-[250px] ml-10 relative rounded-2xl border gap-4 border-slate-700 px-8 py-6 flex flex-col hover:scale-110"
                        key={item.name}
                    >
                        <div className={"w-[35px]"}>
                            <svg viewBox="0 0 43 28" id="svg10624376550">
                                <path d="M 11.4 27.6 L 18.6 0 L 12 0 L 0 27.6 Z M 35.4 27.6 L 42.6 0 L 36 0 L 24 27.6 Z"
                                      fill="var(--token-551512d3-7ccf-4658-8a33-3240b782b72f, rgb(59, 130, 246)) /* {&quot;name&quot;:&quot;Primary&quot;} */"></path>
                            </svg>
                        </div>
                        <div>
                            {item.quote}
                        </div>
                        <div className={"flex mt-auto gap-2"}>
                            <div className={"rounded-full bg-blue-800 w-[48px] aspect-square"}></div>
                            <div className={"flex flex-col justify-center"}>
                                <span className={"text-md"}>{item.name}</span>
                                <span className={"text-sm"}>{item.title}</span>
                            </div>
                        </div>

                    </li>
                ))}
            </Marquee>

        </div>
    );
};
