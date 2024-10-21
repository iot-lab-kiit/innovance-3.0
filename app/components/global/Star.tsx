import Image from 'next/image'
import React from 'react'

const Star = () => {
  return (
    <div className="w-full h-full flex justify-center my-24">
        <Image
          src="/backgrounds/star_image_blue.jpg"
          width={50}
          height={50}
          alt="Picture of the star"
        />
      </div>
  )
}

export default Star