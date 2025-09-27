import AboutUsSections from "@/components/AboutUsSections";
import Banner from "@/components/Banner";
import ProductsSection from "@/components/ProductsSection";
import SpecialOfferSection from "@/components/SpecialOfferSection";
import TestimonialSection from "@/components/TestimonialSection";

const Home = () => {
  return (
    <>
      <Banner />
      <ProductsSection />
      <AboutUsSections />
      <SpecialOfferSection />
      <TestimonialSection />
      <div className="h-screen"></div>
    </>
  );
};

export default Home;
