"use client";

import Footer from "./components/global/Footer";
import Hero from "./components/Hero/Hero";
import StatisticsShowcase from "./components/StatisticsShowcase/StatisticsShowcase";
import TimerSection from "./components/Timer/TimerSection";
import { EventSchedule } from "./components/EventSchedule/EventSchedule";
import FAQ from "./components/FAQ/FAQ";
import About from "./components/About";
import Star from "./components/global/Star";
import Card from "./components/CardComponents/Card";
// import SpeakerDummy from "./components/CardComponents/SpeakerDummy";

export default function Home() {
  return (
    <>
      <Hero />
      <StatisticsShowcase />
      <About />
      <EventSchedule />
      <Star />
      <Card />
      {/* <SpeakerDummy /> */}
      <Star />
      <FAQ />
      <Star />
      <TimerSection text1="HURRY!" text2="RESERVE YOUR SPOTS NOW" />
      <Footer />
    </>
  );
}
