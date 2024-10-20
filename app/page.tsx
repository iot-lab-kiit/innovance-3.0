"use client";
import { EventSchedule } from "./components/EventSchedule/EventSchedule";
import Hero from "./components/HeroComponents/Hero";
import TimerSection from "./components/TimerComponents/TimerSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TimerSection />
      <EventSchedule/>
    </>
  );
}
