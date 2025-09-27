import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
  className?: string;
  item: any;
};

const ProductCard = ({ product, className, item }: TProductCardProps) => {
  return (
    <motion.div
      variants={item}
      className={cn(
        "rounded-xl border border-gray-20 shadow-lg p-3 space-y-3",
        className
      )}
    >
      <Link
        href={`/products/${product.id}`}
        className="h-54 w-full bg-gray-20 rounded-xl"
      >
        <Image
          src={product.images[0]}
          alt={product.productName}
          width={300}
          height={240}
          className="w-full h-54 object-cover rounded-xl"
        />
      </Link>
      <div className="space-y-2 text-center">
        <Link href={`/products/${product.id}`}>
          <h1 className="text-lg font-medium font-rubik">
            {product.productName}
          </h1>
        </Link>
        <p>$ {product.price}</p>
        <button className="w-full py-2 px-4 border border-gray-50 hover:bg-primary font-medium hover:border-primary hover:text-white transition rounded-md">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
