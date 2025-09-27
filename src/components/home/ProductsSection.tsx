"use client";

import { useMemo, useState } from "react";
import Title from "../Title";
import ProductCard from "../ProductCard";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IProduct } from "@/store/features/products/types";
import { ICategory } from "@/store/features/categories/types";
import { PackageOpen } from "lucide-react";

const ProductsSection = ({
  data,
  categories,
}: {
  data: IProduct[] | [];
  categories: ICategory[] | [];
}) => {
  const [tab, setTab] = useState("all");

  const tabData = useMemo(() => {
    return [
      { name: "All", value: "all" },
      ...categories.map((cat) => ({
        name: cat.categoryName,
        value: cat.id,
      })),
    ];
  }, [categories]);

  const filteredProducts = useMemo(() => {
    if (tab === "all") return data;
    return data.filter((p) => p.categoryId === tab);
  }, [tab, data]);

  return (
    <section className="container py-24 flex items-center justify-center flex-col gap-5 text-center">
      <Title
        badge="Our Products"
        description="We offer a wide variety of fresh and frozen fruits, vegetables, and salad ingredients."
        title="Our Fresh Products"
      />

      {/* Tabs */}
      <div className="flex items-center justify-center max-sm:gap-2 gap-5 flex-wrap">
        {tabData.map((item) => (
          <button
            onClick={() => setTab(item.value)}
            key={item.value}
            className={cn(
              "text-sm font-medium border max-sm:text-xs max-sm:py-[6px] max-sm:px-3 px-4 py-2 rounded-sm",
              tab === item.value
                ? "bg-green text-white border-b-2 border-green"
                : "text-gray-100 border-gray-50"
            )}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredProducts.length > 0 ? (
          filteredProducts
            ?.slice(0, 8)
            ?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-10 text-gray-400">
            <PackageOpen className="w-12 h-12 mb-3" />
            <p className="text-lg font-medium">No products found</p>
            <p className="text-sm text-gray-500 mt-1">
              Try changing the category filter or check back later.
            </p>
          </div>
        )}
      </div>

      <Link
        href="/products"
        className="mt-8 py-2 px-4 border transition border-primary hover:bg-primary hover:text-white text-primary font-medium rounded-md"
      >
        See All Products
      </Link>
    </section>
  );
};

export default ProductsSection;
