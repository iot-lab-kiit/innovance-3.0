import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

function Pricing() {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div>
 
      <div className="boxes flex flex-wrap justify-center gap-8 px-4">
        <div className="smallbox w-full sm:w-[26em] h-[30rem] border-2 bg-[#101010] border-[#585858] rounded-lg">
          <span className="mx-8 mt-12 flex flex-row">
            <Image
              src="/backgrounds/star_image_blue.jpg"
              width={20}
              height={20}
              alt="Picture of the star"
            />
            <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-gray-400 mx-2">
              GENERAL
            </span>
          </span>
          <h2 className="text-3xl mx-8 md:text-4xl lg:text-5xl font-medium my-5">
            249/-
          </h2>
          <p className="text-lg mx-8 md:text-2xl font-bitter font-normal mb-5">
            REGULAR PRICE
          </p>
          <ul className="text-gray-300 mx-8 mb-6 leading-8">
            <li>• Tickets to Exclusive Speaker Sessions</li>
            <li>• Tickets to Hands-on Workshops on AI/ML</li>
            <li>• Build your own portfolio website</li>
            <li>• Certification of Participation</li>
            <li>• Meals included</li>
          </ul>
          <div
            className="mx-8  md:block relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              initial={{ width: "100%" }}
              animate={isHovered ? { width: 0 } : { width: "100%" }}
              transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
              className="absolute w-36 h-full bg-blue-500"
            />
            <Link href="/registrations">
              <motion.button
                transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
                whileHover={{ color: "#3b82f6", borderColor: "#3b82f6" }}
                className="w-full  h-full text-background relative z-10 py-2 px-5 border border-background"
              >
                GET TICKET
              </motion.button>
            </Link>
          </div>
        </div>
        {/* <div className="relative w-full sm:w-[26rem] h-[30rem] border-2 bg-[#101010] border-[#585858] rounded-lg overflow-hidden">

     
      
      <div className="smallbox w-full h-full p-8 cursor-not-allowed">
        <span className="flex flex-row">
          <Image
            src="/backgrounds/star_image_blue.jpg"
            width={20}
            height={20}
            alt="Picture of the star"
          />
          <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-gray-400 mx-2">
            GENERAL
          </span>
        </span>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium my-5">
          249/-
        </h2>
        
        <p className="text-lg md:text-3xl font-bitter font-normal mb-5">
          Regular Price
        </p>
        
        <ul className="text-gray-300 leading-8 mb-6">
          <li>• Tickets to Exclusive Speaker Sessions</li>
          <li>• Tickets to Hands-on Workshops on AI/ML</li>
          <li>• Build your own portfolio website</li>
          <li>• Certification of Participation</li>
          <li>• Meals included</li>
        </ul>
        
        <div className="relative">
  <motion.div
    className="absolute w-full h-full bg-blue-500 opacity-50 pointer-events-none"
  />
  
  <motion.button
    disabled
    className="w-full h-full text-background relative z-20 py-2 px-5 cursor-not-allowed pointer-events-none"
  >
    GET TICKET
  </motion.button>
</div>

      </div>
    </div> */}
      </div>
    </div>
  );
}

export default Pricing;
