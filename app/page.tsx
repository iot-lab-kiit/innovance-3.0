"use client";

import Footer from "./components/global/Footer";
import Card from "./components/CardComponents/Card";
import Hero from "./components/Hero/Hero";
import StatisticsShowcase from "./components/StatisticsShowcase/StatisticsShowcase";
import TimerSection from "./components/Timer/TimerSection";
import { EventSchedule } from "./components/EventSchedule/EventSchedule";
<<<<<<< HEAD
=======
import About from "./components/global/about";
>>>>>>> 6febc9fcc3da0914b0d4097af33afb3b93888fee
import FAQ from "./components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <StatisticsShowcase />
      <About/>
      <TimerSection />
      <EventSchedule />
      <Card />
      <FAQ />
      <Footer />
    </>
  );
}
