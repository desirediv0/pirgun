import { InfiniteTextScroll } from "@/components/infinite-text-scroll";
import Banner from "./_components/Banner";
import OfferHero from "./_components/offer-hero";
import VisaCategories from "./_components/visa-category";
import WhyChooseUs from "./_components/why-choose-us";

export default function Home() {
  return (
    <>
      <Banner />
      <WhyChooseUs />
      <VisaCategories />
      <InfiniteTextScroll
        text="Testimonials"
        content={"As a non-technical person, managing this project seemed overwhelming, but Pirgun Air Systems made it seamless. They streamlined everything on a turnkey basis, ensuring cost savings and top-quality execution."}
      />
      {/* <TestimonialSection /> */}
      <OfferHero />

    </>
  );
}
