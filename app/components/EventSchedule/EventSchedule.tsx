"use client";
import React from "react";
import { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { motion } from "framer-motion";

import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const EventSchedule: React.FC = ()=>{

  const [activeDay, setActiveDay] = useState(1);

  
  const day1Schedule = [
    { time: "09:00 - 10:00",
      title: "Panel Discussion: Tech Trends",
      description:"Sebastian Müller",
      location:"campus-17"
      },
    { time: "10:00 - 11:30", 
      title: "Workshop: Cloud Computing Basics",
    description:"Sebastian Müller",
    location:"campus-17"
    },
    { time: "12:00 - 01:30", 
      title: "Fireside Chat with Tech Leaders", 
    description:"Sebastian Müller",
    location:"campus-17"
    },
  ];

  const day2Schedule = [
    { time: "09:00 - 10:00",
      title: "Panel Discussion: Tech Trends",
      description:"hello",
      location:"campus-17"
      },
    { time: "10:00 - 11:30", 
      title: "Workshop: Cloud Computing Basics",
    description:"hello",
    location:"campus-17"
    },
    { time: "12:00 - 01:30", 
      title: "Fireside Chat with Tech Leaders", 
    description:"hello",
    location:"campus-17"
    },
  ];

  const schedule = activeDay === 1 ? day1Schedule : day2Schedule;

return(
  <div className={poppins.className}>
 <div className="bg-black text-white py-16 px-16 w-full ">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-6xl ">Event Schedule</h1>
        <p className="text-lg mt-4">
          Dive into the heart of innovation with our event schedule. Discover
          thought-provoking keynotes, engaging workshops, and networking opportunities
          designed to elevate your tech experience. Explore the future, engage with
          industry leaders, and let innovation guide your journey.
        </p>
      </div>

      
      <div className="flex justify-center  mb-4">

      <div className="relative"></div>
      <motion.div
        className="absolute top-0 left-0 w-32 bg-blue-500 z-0"
        initial={{ x: 0 }}
        animate={{ x: activeDay === 2 ? 144 : 0 }} // Adjust the x value to move to the second button
        transition={{ duration: 4, ease: "linear" }}
      />
          
      <button
          className={`px-8 py-3 z-10 ${
            activeDay === 1
              ? "bg-blue-500 text-black"
              : "bg-transparent  text-white"
          }`}
          onClick={() => setActiveDay(1)}
        >
          Day 1
        </button>
        <button
          className={`px-8 py-3  z-10  ${
            activeDay === 2
              ? "bg-blue-500 text-black"
              : "bg-transparent   text-white"
          }`}
          onClick={() => setActiveDay(2)}
        >
          Day 2
        </button>    
      </div>

      
      <div>
        {schedule.map((item, index) => (
          <div key={index} className=" border-b-[0.02px] border-blue-500 py-6">
            <div className="text-blue-500  text-md mb-2">
              {item.time}
            </div>
            <h3 className="text-xl mb-2 ">{item.title}</h3>     
            <p className="text-sm mb-[0.50rem] ">{item.description}</p>
            <div className="flex items-center text-md gap-1">
            <MdLocationPin />
              <div>{item.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
)
}