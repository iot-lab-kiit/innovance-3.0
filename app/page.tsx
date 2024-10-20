"use client";
import Hero from "./components/HeroComponents/Hero";
import TimerSection from "./components/TimerComponents/TimerSection";
import SponsorshipSection from "@/app/components/SponsorshipComponents/SponsorshipSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TimerSection />
      <SponsorshipSection/>
    </>
  );
}
