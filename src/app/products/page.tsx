import { getCategoriesServer } from "@/lib/getCategoriesServer";
import { getProductsServer } from "@/lib/getProductsServer";
import { Metadata } from "next";
import Products from "../../components/products/Products";
import Title from "@/components/Title";

export const metadata: Metadata = {
  title: "Discover Our Latest Products | Fresh Harvests",
  description:
    "Browse our wide collection of products. Find the best deals, latest arrivals, and top-rated items at Fresh Harvests.",
  openGraph: {
    title: "Products | Fresh Harvests",
    description:
      "Browse our wide collection of products. Find the best deals, latest arrivals, and top-rated items at Fresh Harvests.",
    url: "/products",
    siteName: "Fresh Harvests",

    type: "website",
  },
};

const ProductsPage = async () => {
  const { data: products } = await getProductsServer();
  const { data: categories } = await getCategoriesServer();

  return (
    <main className="container py-24 min-h-dvh flex items-center  flex-col gap-5 text-center">
      <Title
        badge="Our Products"
        description="Discover the latest items, curated collections, and trending products—handpicked for you."
        title="Our Fresh Products"
      />

      <Products
        data={products?.data || []}
        categories={categories?.data || []}
      />
    </main>
  );
};

export default ProductsPage;
