import React from 'react'
import WhyChooseUs from '../_components/why-choose-us'
import Hero from '../_components/Hero'
import { ProcessOverview } from '../_components/process-overview'
import OfferHero from "../_components/offer-hero";

export default function page() {
  return (
    <>
    <Hero bgImage="breadcrumb.png" Heading="About Us" />
        <WhyChooseUs/>
        <ProcessOverview />
         <OfferHero />
        
    </>
  )
}
