import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-500 absolute z-10 py-1">
        <Marquee
          speed={20}
          direction="right"
          autoFill={true}
          className="py-3 bg-blue-500"
        >
          <span id="comingSoon" className="text-background">
            RESERVE YOUR SPOT NOW
          </span>
          <Image
            src="/icons/star.svg"
            width={15}
            height={15}
            alt="star"
            className=""
          />
        </Marquee>
      </div>
      <br />
      <br />
      <br />
      <br />
      <footer className="w-full h-60 bg-black text-white flex flex-col items-center justify-center space-y-6">
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/iot.lab.kiit/?hl=en"
            className="hover:scale-110 transform transition duration-300"
          >
            <Image
              width={10}
              height={10}
              src="/icons/instagram_footer_dark.svg"
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://x.com/iotlabkiit"
            className="hover:scale-110 transform transition duration-300"
          >
            <Image
              width={10}
              height={10}
              src="/icons/twitter_footer_dark.svg"
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/iotlabkiit/mycompany/"
            className="hover:scale-110 transform transition duration-300"
          >
            <Image
              width={10}
              height={10}
              src="/icons/linkedin_footer_dark.svg"
              alt="Linkedin"
              className="w-6 h-6"
            />
          </a>
        </div>

        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 hover:bg-blue-700 transform transition duration-300">
          Contact Us
        </button>
        <p className="text-sm">
          Copyright &copy; 2024,{" "}
          <a
            className="underline underline-offset-1"
            href="https://iotkiit.in/"
          >
            IOT Lab, KIIT
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
