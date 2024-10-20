"use client";

import {cn} from "@/lib/utils";
import React, {useEffect, useState} from "react";

export const TestimonialsSlider = ({
                                       items,
                                       direction = "left",
                                       speed = "fast",
                                       pauseOnHover = true,
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
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "100s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  w-full overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item) => (
                    <li
                        className="transition w-[350px] max-w-full relative rounded-2xl border gap-4 flex-shrink-0 border-slate-700 px-8 py-6 flex flex-col hover:scale-110"
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
            </ul>
        </div>
    );
};
