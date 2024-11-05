import React from "react";
import StatisticsRow from "./StatisticsRow";
import CountUp from "react-countup";
import Star from "../global/Star";

const StatisticsShowcase = () => {
  return (
    <div>
      <Star className="mt-20 md:mt-0 lg:my-2 md:my-4 xl:my-1" />
      <div className="flex-grow bg-[#101010] flex justify-center items-center w-full font-sans py-8 lg:py-4 lg:h-screen h-fit pt-0">
        <div className="w-[80%] md:w-[90%] lg:w-[70%] h-auto flex flex-col md:flex-row gap-4 justify-center items-center md:items-start">
          <div className="md:w-1/2 h-full flex flex-col justify-start gap-4 px-2 py-4">
            <h1 className="text-[35px] md:text-[40px] font-bitter font-[400]">
              Who are we?
            </h1>
            <div>
              <p className="text-[16px] font-poppins pr-2 md:w-[80%] font-light">
              Empowered by technology, a student-faculty team tackles social challenges. Our goal is to leverage each member&apos;s unique skills for creative problem-solving.
              </p>
            </div>
            <a
              href="/gallery"
              className="flex justify-center items-center px-4 py-2 w-1/2  bg-gradient-to-r from-blue-400 to-blue-500 text-black text-base font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              VIEW MORE
            </a>
          </div>
          <div className="md:w-1/2 h-full">
            <div className="py-2 pb-4 w-full border-t-2 border-t-[#3B82F6] flex flex-col">
              <h1 className="text-[50px] md:text-[60px] font-[400]">
                <CountUp start={0} end={100} duration={3} />%
              </h1>
              <p className="text-md font-poppins">
                An opportunity to connect with industry leaders and leading
                companies in the sector.
              </p>
            </div>
            <StatisticsRow
              count1={20}
              title1="Events conducted"
              count2={400}
              title2="and more Attendees"
            />
            <StatisticsRow
              count1={30}
              title1="and more projects"
              count2={11}
              title2="Domains"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsShowcase;
