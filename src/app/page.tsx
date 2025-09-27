import AboutUsSections from "@/components/home/AboutUsSections";
import Banner from "@/components/home/Banner";
import BlogSection from "@/components/home/BlogSection";
import ProductsSection from "@/components/home/ProductsSection";
import SpecialOfferSection from "@/components/home/SpecialOfferSection";
import TestimonialSection from "@/components/home/TestimonialSection";

const Home = () => {
  return (
    <>
      <Banner />
      <ProductsSection />
      <AboutUsSections />
      <SpecialOfferSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
};

export default Home;
