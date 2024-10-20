"use client";
import Footer from "./components/global/Footer";
import Hero from "./components/Hero/Hero";
import StatisticsShowcase from "./components/StatisticsShowcase/StatisticsShowcase";
import TimerSection from "./components/Timer/TimerSection";
import SponsorshipSection from "@/app/components/SponsorshipComponents/SponsorshipSection";
import TestimonialsSection from "@/app/components/TestimonialsComponents/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatisticsShowcase />
      <TimerSection />
      <SponsorshipSection/>
      <TestimonialsSection/>
      <Footer />
    </>
  );
}
