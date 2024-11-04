"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";

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
  const ticketRef = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { id } = useParams();
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const drawGradientText = (text: string, canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, "#f39223");
    gradient.addColorStop(1, "#c83b91");

    ctx.fillStyle = gradient;
    ctx.font = "bold 20px Poppins";
    ctx.fillText(text, 0, 30);
  };

  const handleDownloadTicket = async () => {
    if (!ticketRef.current) return;

    const canvas = await html2canvas(ticketRef.current);
    const pngFile = canvas.toDataURL("image/png");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngFile;
    downloadLink.download = "innovance_virtual_ticket.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

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

  useEffect(() => {
    if (userData && canvasRef.current) {
      const fullName = `${userData.first_name.toUpperCase()} ${userData.last_name.toUpperCase()}`;
      drawGradientText(fullName, canvasRef.current);
    }
  }, [userData]);

  return (
    <div className="flex justify-center font-poppins">
      {userData && !error && (
        <div className="ref p-10 max-w-[420px] md:max-w-[1024px] flex flex-col items-center">
          <div
            ref={ticketRef}
            className="flex flex-col md:flex-row bg-white text-black relative"
          >
            <div className="bg-[#101010] z-10 absolute -top-5 -left-5 rounded-full w-12 h-12"></div>
            <div className="bg-[#101010] z-10 absolute -top-5 -right-5 rounded-full w-12 h-12"></div>
            <div className="bg-[#101010] z-10 absolute -bottom-5 -left-5 rounded-full w-12 h-12"></div>
            <div className="bg-[#101010] z-10 absolute -bottom-5 -right-5 rounded-full w-12 h-12"></div>
            <div className="w-full h-[320px] md:h-auto md:w-[500px] relative">
              <Image
                src={"/assets/img/ticket.png"}
                alt="innovance 3.0"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="h-2/3 md:w-2/3 mt-10 mb-5 ml-4 mr-4 fl flex-col">
              <div className="flex relative md:flex-nowrap gap-5 items-center">
                <div className="text-4xl text-wrap font-bold text-blue-700">
                  INNOVANCE 3.0
                </div>
                <Image
                  src={"/assets/img/logo.png"}
                  alt="logo"
                  width={70}
                  height={70}
                  style={{ maxWidth: "70px", maxHeight: "70px" }}
                />
              </div>
              <div className="flex flex-col md:flex-row mt-6 md:mt-0 gap-5">
                <div className="flex flex-col gap-10">
                  <div>
                    <div>9-10 NOVEMBER</div>
                    <div>CAMPUS 15</div>
                    <div>11 AM ONWARDS</div>
                  </div>
                  {userData.status === "pending" ? (
                    <div>
                      <div>Your registration status is pending.</div>
                      <div>
                        After comfirmation of the registration, your details
                        will be visible here
                      </div>
                    </div>
                  ) : (
                    <div>
                      <canvas
                        ref={canvasRef}
                        width={200}
                        height={50}
                        className="w-fit h-fit"
                      />
                      <div>{userData.email}</div>
                      <div>{userData.branch}</div>
                    </div>
                  )}
                </div>
                <div className="flex justify-center items-center">
                  <QRCode
                    size={120}
                    value={
                      userData.status === "pending"
                        ? `https://localhost/`
                        : `https://localhost/ticket/${userData.id}`
                    }
                    viewBox={`0 0 256 256`}
                    className="flex justify-center items-center"
                  />
                </div>
              </div>
              <div className="px-6 md:px-0">
                <div className="flex flex-wrap justify-between gap-2 items-center md:mr-14 mt-10">
                  <div className="flex gap-3 md:m-0 m-auto">
                    <div
                      className={
                        `w-7 h-7 ` +
                        (userData.day1 ? "bg-blue-300" : "bg-[#bfc0c2]")
                      }
                    ></div>
                    <div
                      className={
                        `w-7 h-7 ` +
                        (userData.day1 ? "bg-blue-300" : "bg-[#bfc0c2]")
                      }
                    ></div>
                    <div
                      className={
                        `w-7 h-7 ` +
                        (userData.day1 ? "bg-blue-300" : "bg-[#bfc0c2]")
                      }
                    ></div>
                  </div>
                  <div className="flex items-center gap-3 md:m-0 m-auto">
                    <Image
                      src={"/assets/img/iotlab+kiit.png"}
                      alt="iotLab"
                      width={0}
                      height={65}
                      sizes="65px"
                      className="w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDownloadTicket();
            }}
            disabled={userData.status === "pending"}
            className="p-4 px-8 border border-white text-xl mt-5 disabled:text-gray-500 disabled:border-gray-500"
          >
            Download
          </button>
        </div>
      )}
    </div>
  );
};

export default TicketPage;
