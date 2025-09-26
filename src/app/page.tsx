import AboutUsSections from "@/components/AboutUsSections";
import Banner from "@/components/Banner";
import ProductsSection from "@/components/ProductsSection";
import SpecialOfferSection from "@/components/SpecialOfferSection";

const Home = () => {
  return (
    <>
      <Banner />
      <ProductsSection />
      <AboutUsSections />
      <SpecialOfferSection />
      <div className="h-screen"></div>
    </>
  );
};

export default Home;
