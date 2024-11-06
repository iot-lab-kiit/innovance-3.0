"use client";

import { motion } from "framer-motion";
import Footer from "./components/global/Footer";
import Hero from "./components/Hero/Hero";
import StatisticsShowcase from "./components/StatisticsShowcase/StatisticsShowcase";
import TimerSection from "./components/Timer/TimerSection";
import { EventSchedule } from "./components/EventSchedule/EventSchedule";
import Pricing from "./components/Pricing/tickets";
import FAQ from "./components/FAQ/FAQ";
import About from "./components/About";
import Star from "./components/global/Star";
import Card from "./components/CardComponents/Card";

const fadeInUp = {
  hidden: { 
    y: 40, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.99]
    }
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px" }}
        variants={fadeInUp}
      >
        <StatisticsShowcase />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px" }}
        variants={fadeInUp}
      >
        <About />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px" }}
        variants={fadeInUp}
      >
        <EventSchedule />
      </motion.div>


      <Star />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px" }}
        variants={fadeInUp}
      >
        <Card />
      </motion.div>


      <Star />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px" }}
        variants={fadeInUp}
      >
        <Pricing />
      </motion.div>
      <Star/>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px" }}
        variants={fadeInUp}
      >
        <FAQ />
      </motion.div>

      <Star />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px" }}
        variants={fadeInUp}
      >
        <TimerSection text1="HURRY!" text2="RESERVE YOUR SPOTS NOW" />
      </motion.div>

      <Footer />
    </>
  );
}
