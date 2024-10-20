"use client";
import Card from "./components/CardComponents/Card";
import Hero from "./components/HeroComponents/Hero";
import TimerSection from "./components/TimerComponents/TimerSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TimerSection />
      <Card />
    </>
  );
}
