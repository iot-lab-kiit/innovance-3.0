"use client";

import Footer from "./components/global/Footer";
import Card from "./components/CardComponents/Card";
import Hero from "./components/Hero/Hero";
import StatisticsShowcase from "./components/StatisticsShowcase/StatisticsShowcase";
import TimerSection from "./components/Timer/TimerSection";
import { EventSchedule } from "./components/EventSchedule/EventSchedule";
import FAQ from "./components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <StatisticsShowcase />
      <TimerSection />
      <EventSchedule />
      <Card />
      <FAQ />
      <Footer />
    </>
  );
}
