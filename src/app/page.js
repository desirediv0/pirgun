import AnimatedStatsCounter from "./_components/animated-stats-counter";
import Banner from "./_components/Banner";
import CountryCarousel from "./_components/country-carosuel";
import OfferHero from "./_components/offer-hero";
import VisaCategories from "./_components/visa-category";
import WhyChooseUs from "./_components/why-choose-us";

export default function Home() {
  return (
    <>
    <Banner />
    <WhyChooseUs />
    <CountryCarousel/>
    <OfferHero />
    <AnimatedStatsCounter />
    <VisaCategories/>
    </>
  );
}
