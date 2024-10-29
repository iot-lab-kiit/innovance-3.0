import React from "react";
import Image from "next/image";

const TicketPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url(/assets/img/1.jpg)" }}
    >
      <div className="flex w-full max-w-4xl h-[600px] border border-white border-opacity-30 rounded-3xl backdrop-blur-md overflow-hidden">
        {/* First Column */}
        <div className="hidden lg:flex flex-col items-center justify-center w-1/2 bg-white bg-opacity-30 backdrop-blur-md rounded-r-[20%] transition-all duration-300">
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

        {/* Second Column */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-6">
          {/* Login Form */}
          <div className="flex flex-col items-center w-full mt-8 transition-all">
            <h2 className="text-white text-2xl font-semibold mb-6">Ticket</h2>

            <div className="w-full">
              <div className="relative mb-4">
                <input
                  value={"Priyanshu De"}
                  placeholder="Username"
                  className="w-full h-14 p-4 text-white placeholder-white bg-white bg-opacity-20 border-none rounded-lg backdrop-blur-md shadow-lg outline-none"
                  required
                />
                
              </div>

              <div className="relative mb-4">
                <input
                  value="Transaction ID - 123456"
                  placeholder="Password"
                  className="w-full h-14 p-4 text-white placeholder-white bg-white bg-opacity-20 border-none rounded-lg backdrop-blur-md shadow-lg outline-none"
                  required
                />
                
              </div>

              {/* QR Code Image */}
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/img/qr-code.svg"
                  width={100}
                  height={100}
                  alt="QR Code"
                />
              </div>

              <button className="w-full h-14 bg-[#21264D] text-white font-semibold bg-primary rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all hover:gap-3">
                Hope to See You Soon
                <i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
