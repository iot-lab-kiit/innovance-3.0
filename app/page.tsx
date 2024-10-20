"use client";
import Footer from "./components/global/Footer";
import Hero from "./components/Hero/Hero";
import StatisticsShowcase from "./components/StatisticsShowcase/StatisticsShowcase";
import TimerSection from "./components/Timer/TimerSection";
import Hero from "./components/HeroComponents/Hero";
import TimerSection from "./components/TimerComponents/TimerSection";
import SponsorshipSection from "@/app/components/SponsorshipComponents/SponsorshipSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatisticsShowcase />
      <TimerSection />
      <SponsorshipSection/>
       <Footer />
    </>
  );
}
