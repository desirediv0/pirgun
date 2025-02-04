import React from 'react'

export default function Hero({bgImage, Heading}) {
  return (
    <section className={`bg-[url(/${bgImage})] min-h-[70vh] bg-no-repeat bg-cover`}>
        <div className='container py-20 md:py-40'>
            <h1 className='text-3xl md:text-7xl text-center font-semibold'>{Heading}</h1>
        </div>
    </section>
  )
}
