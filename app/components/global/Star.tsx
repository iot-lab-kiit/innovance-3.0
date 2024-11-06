import Image from 'next/image';
import React from 'react';

const Star = ({ className = "" }) => {
  return (
    <div className={`w-full h-full flex justify-center my-12 lg:my-24 ${className}`}>
      <Image
        src="/backgrounds/star_image_blue.jpg"
        width={50}
        height={50}
        alt="Picture of the star"
      />
    </div>
  );
};

export default Star;
