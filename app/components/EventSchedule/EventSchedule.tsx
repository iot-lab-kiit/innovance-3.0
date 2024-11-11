"use client";
import React, { useState, useEffect } from "react";
import { MdLocationPin } from "react-icons/md";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";


interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  location: string;
}


interface DaySchedule {
  day: number;
  schedule: ScheduleItem[];
}

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const EventSchedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [scheduleData, setScheduleData] = useState<DaySchedule[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/eventschedule.json");
      const data = await response.json();
      setScheduleData(data.days); 
    };

    fetchData();
  }, []);

 
  const currentSchedule: ScheduleItem[] =
    scheduleData.find((day) => day.day === activeDay)?.schedule || [];

  return (
    <div className={poppins.className}>
      <div className="text-white py-16 px-8 sm:px-12 md:px-20 lg:px-32 max-w-[1400px] mx-auto" id="schedule">
        <div className="sm:text-center mb-12">
          <h1 className="text-4xl sm:text-6xl">Event Schedule</h1>
          <p className="text-base sm:text-lg mt-4">
          As you explore our event schedule, prepare to leap into the future of technology! Engage in interactive workshops, stimulating conversations, and unique networking opportunities with professionals in the field. Now is the time to rekindle your enthusiasm and get new ideas. Don&apos;t pass up the opportunity to influence the next big thing in technology! 
          </p>
        </div>

      
        <div className="flex justify-center mb-4 relative">
          <motion.div
            className="absolute top-0 left-0 w-32 bg-blue-500 z-0"
            initial={{ x: 0 }}
            animate={{ x: (activeDay - 1) * 144 }}
            transition={{ duration: 0.3, ease: "linear" }}
          />

        
          {scheduleData.map((day) => (
            <button
              key={day.day}
              className={`px-8 py-3 z-10 ${
                activeDay === day.day ? "bg-blue-500 text-black" : "bg-transparent text-white"
              }`}
              onClick={() => setActiveDay(day.day)}
            >
              Day {day.day}
            </button>
          ))}
        </div>

       {/* active days */}
        <div>
          {currentSchedule.length > 0 ? (
            currentSchedule.map((item, index) => (
              <div key={index} className="border-b-[0.02px] border-blue-500 py-6">
                <div className="text-blue-500 text-md mb-2">{item.time}</div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-sm mb-[0.50rem]">{item.description}</p>
                <div className="flex items-center text-md gap-1">
                  <MdLocationPin />
                  <div>{item.location}</div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white">No schedule available for this day.</p>
          )}
        </div>
      </div>
    </div>
  );
};
