// import { InfiniteTextScroll } from "@/components/infinite-text-scroll";
import Banner from "./_components/Banner";
import OfferHero from "./_components/offer-hero";
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
      {/* <InfiniteTextScroll
        text="We provide services in"
        content={"Australia, Canada, Germany, UK, USA"}
      /> */}

    </>
  );
}
