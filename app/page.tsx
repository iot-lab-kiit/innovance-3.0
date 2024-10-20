"use client";

import Footer from "./components/global/Footer";
import Hero from "./components/Hero/Hero";
import StatisticsShowcase from "./components/StatisticsShowcase/StatisticsShowcase";
import TimerSection from "./components/Timer/TimerSection";
import { EventSchedule } from "./components/EventSchedule/EventSchedule";
import SponsorshipSection from "@/app/components/SponsorshipComponents/SponsorshipSection";
import TestimonialsSection from "@/app/components/TestimonialsComponents/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatisticsShowcase />
      <TimerSection />
      <EventSchedule/>
      <SponsorshipSection/>
      <TestimonialsSection/>
      <Footer />
    </>
  );
}
