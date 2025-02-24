import { AvailableCountries } from "./_components/available-countries";
import Banner from "./_components/Banner";
import { CoachingCarousel } from "./_components/coaching-carousel";
import CountryCarousel from "./_components/country-carosuel";
import OfferHero from "./_components/offer-hero";
import { ProcessOverview } from "./_components/process-overview";
import { TeamSection } from "./_components/team-section";
import { TestimonialSection } from "./_components/testimonial-section";
import VisaCategories from "./_components/visa-category";
import WhyChooseUs from "./_components/why-choose-us";

export default function Home() {
  return (
    <>
      <Banner />
      <WhyChooseUs />
      <VisaCategories />
      <TestimonialSection />
      <OfferHero />
   
    </>
  );
}
