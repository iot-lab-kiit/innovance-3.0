"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HamburgerButton from "./HamburgerButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    hidden: { opacity: 0, y: -256 }, // Start off-screen and transparent
    visible: { opacity: 1, y: 0 }, // End position
  };
  return (
    <div className="font-geistMono z-30 relative">
      <nav
        className="flex justify-between items-center p-4 shadow-md shadow-blue-500 z-40 relative bg-black"
        style={{ boxShadow: "0px 4px 6px rgba(59, 130, 246, 0.3)" }}
      >
        <div>logo</div>
        <div className="hidden md:flex md:gap-9">
          <Link
            href="/"
            className="hover:scale-110 hover:text-blue-300 transition-all"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:scale-110 hover:text-blue-300 transition-all"
          >
            About
          </Link>
          <Link
            href="/schedule"
            className="hover:scale-110 hover:text-blue-300 transition-all"
          >
            Schedule
          </Link>
          <Link
            href="/gallery"
            className="hover:scale-110 hover:text-blue-300 transition-all"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="hover:scale-110 hover:text-blue-300 transition-all"
          >
            Contact
          </Link>
        </div>
        <div
          className="hidden md:block relative"
          onMouseEnter={() => {
            setIsHovered(!isHovered);
          }}
          onMouseLeave={() => {
            setIsHovered(!isHovered);
          }}
        >
          <motion.div
            initial={{ width: "100%" }}
            animate={isHovered ? { width: 0 } : { width: "100%" }}
            transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
            className="absolute w-full h-full bg-blue-500"
          ></motion.div>
          <motion.button
            transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
            whileHover={{ color: "#3b82f6", borderColor: "#3b82f6" }}
            className="w-full h-full text-background relative z-10 py-2 px-5 border border-background"
          >
            GET TICKET
          </motion.button>
        </div>
        <div className="md:hidden flex justify-center items-center">
          <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </nav>
      {/* <hr className="mx-4 z-40 relative" /> */}
      <AnimatePresence>
        {isOpen && (
          <div className={`relative`}>
            <motion.div
              key={"hamburger"}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              transition={{ duration: 0.5 }}
              className="w-full bg-background flex flex-col gap-4 p-4 md:hidden absolute"
            >
              <Link
                href="/"
                className="hover:text-lg hover:text-blue-300 transition-all"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-lg hover:text-blue-300 transition-all"
              >
                About
              </Link>
              <Link
                href="/schedule"
                className="hover:text-lg hover:text-blue-300 transition-all"
              >
                Schedule
              </Link>
              <Link
                href="/gallery"
                className="hover:text-lg hover:text-blue-300 transition-all"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="hover:text-lg hover:text-blue-300 transition-all"
              >
                Contact
              </Link>
              <div className="">
                <button className="py-2 px-5 border border-foreground hover:text-lg hover:text-blue-300 hover:border-blue-300 transition-all">
                  GET TICKET
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
