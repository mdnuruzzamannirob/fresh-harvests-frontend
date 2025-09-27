import { getProductServer } from "@/lib/getProductServer";
import ProductDetails from "./ProductDetails";
import { IProduct } from "@/store/features/products/types";
import { getProductsServer } from "@/lib/getProductsServer";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

// Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: product } = await getProductServer(params.id);

  if (!product?.data) {
    return {
      title: "Product Not Found | Fresh Harvests",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: `${product.data.productName} Price & Details | Fresh Harvests`,
    description:
      product.data.description?.slice(0, 160) ||
      "Product details and features.",
    openGraph: {
      title: product.data.productName,
      description: product.data.description?.slice(0, 160),
    },
  };
}

const DynamicProduct = async ({ params }: Props) => {
  const { data: product } = await getProductServer(params.id);
  const { data: products } = await getProductsServer();

  const newData = products?.data?.filter(
    (prod) => prod.id !== product?.data?.id
  );

  return (
    <main className="min-h-dvh space-y-10 container py-24 lg:py-32">
      <ProductDetails
        product={(product?.data as IProduct) || {}}
        data={newData?.slice(0, 4) || []}
        reviews={[]}
      />
    </main>
  );
};

export default DynamicProduct;
