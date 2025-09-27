import AboutUsSections from "@/components/home/AboutUsSections";
import Banner from "@/components/home/Banner";
import BlogSection from "@/components/home/BlogSection";
import ProductsSection from "@/components/home/ProductsSection";
import SpecialOfferSection from "@/components/home/SpecialOfferSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import { getCategoriesServer } from "@/lib/getCategoriesServer";
import { getProductsServer } from "@/lib/getProductsServer";
import { Metadata } from "next";

const Home = async () => {
  const { data: products } = await getProductsServer();
  const { data: categories } = await getCategoriesServer();

  return (
    <>
      <Banner />
      <ProductsSection
        data={products?.data || []}
        categories={categories?.data || []}
      />
      <AboutUsSections />
      <SpecialOfferSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
};

export default Home;
