import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-screen bg-background">
      <div id="hero" className="h-3/4 flex justify-center items-center">
        <div className="text-center flex flex-col gap-8">
          <div className=" text-blue-500 text-2xl font-bitter">
            date | venue
          </div>
          <div className="text-9xl font-bitter">Innovance 3.0</div>
          <button className="border-foreground border w-fit m-auto py-3 px-7 font-geistMono">
            GET TICKET
          </button>
        </div>
      </div>
      <div id="marquee" className="font-geistMono">
        <div className="w-[calc(100vw+8px)] -left-[6px] -skew-x-[10deg] -rotate-[10deg] sm:-rotate-6 sm:-skew-x-6 md:-rotate-[4deg] md:-skew-x-[4deg]  lg:-rotate-3 lg:-skew-x-3 bg-blue-500 absolute z-20 shadow-xl">
          <Marquee
            direction="right"
            autoFill={true}
            className="py-3 bg-blue-500"
          >
            <span className="px-12 text-background">RESERVE YOUR SPOT NOW</span>
            <Image
              src="/star.svg"
              width={15}
              height={15}
              alt="Picture of the author"
            />
          </Marquee>
        </div>
        <div className="w-[calc(100vw+8px)] -left-[6px] skew-x-[10deg] rotate-[10deg] sm:rotate-6 sm:skew-x-6 md:rotate-[4deg]  md:skew-x-[4deg] lg:rotate-3 lg:skew-x-3 bg-blue-500 absolute z-10">
          <Marquee
            direction="right"
            autoFill={true}
            className="py-3 bg-blue-500"
          >
            <span id="comingSoon" className="text-background">
              RESERVE YOUR SPOT NOW
            </span>
            <Image
              src="/star.svg"
              width={15}
              height={15}
              alt="Picture of the author"
              className="p"
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
}
