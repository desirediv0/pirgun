import Image from 'next/image'
import React from 'react'

export default function Hero({ bgImage, Heading, className }) {
  return (
    <div className="relative w-full h-[250px] lg:h-[350px]">
      <Image
        src={`/${bgImage}`}
        alt="Contact Banner"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0"
      />

      <div className="absolute inset-0 bg-green-800 bg-opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-white text-6xl font-bold">
        {Heading}
      </div>
    </div>
  );
}
