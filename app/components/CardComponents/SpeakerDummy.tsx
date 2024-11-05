import React from "react";
import Image from "next/image";

const SpeakerDummy = () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-[90%] xl:max-w-[70%] md:max-w-[75%] sm:max-w-[60%] mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bitter text-white text-center mb-4">
          Speakers
        </h2>
        <p className="text-base sm:text-lg lg:text-xl font-geist text-gray-300 text-center mb-12">
          Get ready to be inspired by industry leaders and visionaries. Explore
          a lineup of speakers who are at the forefront of innovation, sharing
          insights and expertise on the latest trends and technologies shaping
          the future.
        </p>
        <div className="flex flex-col justify-center items-center">
          <div className="group flex flex-col  rounded-lgp-6 shadow-lg transition-all ">
            {/* Upper Container: Title, Name, Description (centered) */}
            <div className="text-center w-full">
              {/* Title */}
              <p className="text-lg sm:text-xl lg:text-2xl font-geist text-[#3b82f6] mb-2">
                Coming Soon
              </p>
            </div>

            {/* Lower Container: Social Icons and Image */}
            <div className="flex items-end justify-between mt-4 lg:mt-6">
              {/* Social icons aligned vertically */}

              {/* Image stays on the right side and appears from the bottom border */}
              <div className="relative">
                <Image
                  src="/mic.png"
                  alt="Coming Soon"
                  width={280} // Adjust width
                  height={300} // Adjust height
                  className="object-cover transition-transform duration-300 ease-in-out transform group-hover:-translate-y-3 group-hover:scale-110 shadow-lg relative top-6"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerDummy;
