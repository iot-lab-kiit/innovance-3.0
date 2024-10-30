"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface UserData {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  branch: string;
  year: string;
  type: string;
  status: string;
  icard: boolean;
  day1: boolean;
  day2: boolean;
  food: boolean;
}
const TicketPage = () => {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/register?id=${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserData(data.data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    fetchUserData();
  }, [id]);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-fixed bg-center"
      // style={{ backgroundImage: "url(/assets/img/1.jpg)" }}
      id="hero"
    >
      <div className="flex w-full max-w-4xl h-[600px] border border-white border-opacity-30 rounded-3xl backdrop-blur-md overflow-hidden">
        {/* First Column */}
        <div className="hidden lg:flex flex-col items-center justify-center w-1/2 bg-opacity-30 backdrop-blur-md rounded-r-[20%] transition-all duration-300">
          <div className="relative">
            <Image
              src="/assets/img/white-outline.png"
              width={400}
              height={400}
              alt="Main Layer"
            />
            <Image
              src="/assets/img/dots.png"
              width={400}
              height={400}
              alt="Dots"
              className="absolute left-0 top-0"
            />
            <Image
              src="/assets/img/coin.png"
              width={100}
              height={100}
              alt="Coin"
              className="absolute left-10 top-10"
            />
            <Image
              src="/assets/img/spring.png"
              width={100}
              height={100}
              alt="Spring"
              className="absolute right-20 top-20"
            />
            <Image
              src="/assets/img/rocket.png"
              width={400}
              height={100}
              alt="Rocket"
              className="absolute left-19 bottom-0"
            />
            <Image
              src="/assets/img/cloud.png"
              width={100}
              height={100}
              alt="Cloud"
              className="absolute right-10 bottom-20"
            />
            <Image
              src="/assets/img/stars.png"
              width={300}
              height={100}
              alt="Stars"
              className="absolute left-20 top-2"
            />
          </div>
          <p className="text-center text-white max-w-xs mt-8">
            You are a few minutes away from boosting your skills with{" "}
            <span className="font-semibold text-[#171717] text-primary">
              IOT
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-6">
          {/* Displaying API Data */}
          <div className="flex flex-col items-center w-full mt-8 transition-all">
            <h2 className="text-white text-2xl font-semibold mb-6">
              Virtual Ticket
            </h2>

            {userData && (
              <div className="w-full space-y-4">
                <div className="relative mb-4">
                  <p className="w-full h-14 p-4 text-white bg-white bg-opacity-20 border-none rounded-lg backdrop-blur-md shadow-lg outline-none">
                    {userData.first_name} {userData.last_name}
                  </p>
                </div>

                <div className="relative mb-4">
                  <p className="w-full h-14 p-4 text-white bg-white bg-opacity-20 border-none rounded-lg backdrop-blur-md shadow-lg outline-none">
                    id : {userData.id}
                  </p>
                </div>
                <div className="relative mb-4">
                  <p className="w-full h-14 p-4 text-white bg-white bg-opacity-20 border-none rounded-lg backdrop-blur-md shadow-lg outline-none">
                    email : {userData.email}
                  </p>
                </div>
                <div className="relative mb-4">
                  <p className="w-full h-14 p-4 text-white bg-white bg-opacity-20 border-none rounded-lg backdrop-blur-md shadow-lg outline-none">
                    branch : {userData.branch} {userData.year}
                  </p>
                </div>
                <div className="relative mb-4">
                  <p className="w-full h-14 p-4 text-white bg-white bg-opacity-20 border-none rounded-lg backdrop-blur-md shadow-lg outline-none">
                    type : {userData.type}
                  </p>
                </div>

                <div className="relative mb-4">
                  <p className="w-full h-14 p-4 text-white bg-white bg-opacity-20 border-none rounded-lg backdrop-blur-md shadow-lg outline-none">
                    Status - {userData.status}
                  </p>
                </div>
                <label>
                  <input type="radio" name="icard" checked={userData.icard} />
                  ICard
                </label>
                <label>
                  <input type="radio" name="day1" checked={userData.day1} />
                  Day 1
                </label>
                <label>
                  <input type="radio" name="day2" checked={userData.day2} />
                  Day 2
                </label>
                <label>
                  <input type="radio" name="food" checked={userData.food} />
                  Food
                </label>

                <button className="w-full h-14 bg-[#21264D] text-white font-semibold bg-primary rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all hover:gap-3">
                  Hope to See You Soon
                  <i className="bx bx-right-arrow-alt"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
