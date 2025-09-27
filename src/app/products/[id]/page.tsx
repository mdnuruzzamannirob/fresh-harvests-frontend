import { getProductServer } from "@/lib/getProductServer";
import ProductDetails from "./ProductDetails";
import { IProduct } from "@/store/features/products/types";
import { getProductsServer } from "@/lib/getProductsServer";

const DynamicProduct = async ({ params }: { params: { id: string } }) => {
  const { data: product } = await getProductServer(params.id);
  const { data: products } = await getProductsServer();

  const newData = products?.data?.filter(
    (prod) => prod.id !== product?.data?.id
  );

  return (
    <main className="min-h-dvh space-y-10 container py-20 lg:py-28">
      <ProductDetails
        product={(product?.data as IProduct) || {}}
        data={newData?.slice(0, 4) || []}
        reviews={[]}
      />
    </main>
  );
};
export default DynamicProduct;
