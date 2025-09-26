import Image from "next/image";

export type TProduct = {
  id: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  categoryId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

type TProductCardProps = {
  product: TProduct;
};

const ProductCard = ({ product }: TProductCardProps) => {
  return (
    <div className="rounded-xl border border-gray-20 shadow-sm p-3 space-y-3">
      <div className="h-54 w-full bg-gray-20 rounded-xl">
        <Image
          src={product.images[0]}
          alt={product.productName}
          width={300}
          height={240}
          className="w-full h-54 object-cover rounded-xl"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-lg font-medium font-rubik">
          {product.productName}
        </h1>
        <p>$ {product.price}</p>
        <button className="w-full py-2 px-4 border border-gray-50 hover:bg-primary font-medium hover:border-primary hover:text-white transition rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
