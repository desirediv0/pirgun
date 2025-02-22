"use client"

import Image from 'next/image'
import React from 'react'

const InfiniteBrand = ({
  brands = [],
  className = "",
  itemClassName = ""
}) => {
  return (
    <div className={`w-full py-8 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ${className}`}>
      <ul className='flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 animate-infinite-scroll'>
        {brands.map((brand, index) => (
          <li key={index}>
            <Image
              src={brand}
              width={180}
              height={100}
              alt='Brand Logo'
              className={`bg-transparent hover:text-[#87BD2B] transition-all duration-300 text-[#004225] text-xl sm:text-2xl font-semibold sm:grid hidden place-content-center p-4 ${itemClassName}`}
            />
          </li>
        ))}
      </ul>
      <ul className='flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 animate-infinite-scroll' aria-hidden='true'>
        {brands.map((brand, index) => (
          <li key={index}>
            <Image
              src={brand}
              width={180}
              height={100}
              alt='Brand Logo'
              className={`bg-transparent hover:text-[#87BD2B] transition-all duration-300 text-[#004225] text-xl sm:text-2xl font-semibold sm:grid hidden place-content-center p-4 ${itemClassName}`}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InfiniteBrand