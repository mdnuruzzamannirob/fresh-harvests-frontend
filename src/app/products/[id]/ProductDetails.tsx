"use client";

import ProductCard from "@/components/ProductCard";
import Title from "@/components/Title";
import { cn } from "@/lib/utils";
import { IProduct } from "@/store/features/products/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { FiPlus, FiMinus } from "react-icons/fi";

const ProductDetails = ({
  product,
  reviews,
  data,
}: {
  product: IProduct;
  reviews: any;
  data: IProduct[] | [];
}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );

  return (
    <>
      {" "}
      <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Image Slider */}
        <div className="rounded-xl space-y-3 flex flex-col justify-between overflow-hidden border border-gray-30 shadow-xs p-5 relative">
          {/* Image */}
          <div className="relative flex items-center justify-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeIndex}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center"
              >
                <Image
                  src={product?.images[activeIndex]}
                  alt={product?.productName}
                  width={300}
                  height={300}
                  className="w-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex  justify-center gap-2">
            {product?.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`size-3 rounded-full transition ${
                  activeIndex === index
                    ? "bg-green scale-125"
                    : "bg-gray-50 hover:bg-gray-80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 space-y-3">
          {/* <Badge>{product?.category}</Badge> // !!! TODO */}

          <h1 className="text-3xl font-medium font-rubik ">
            {product?.productName}
          </h1>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500 text-lg">{"★★★★★"}</div>
            <span className=" font-rubik font-medium">5.0</span>
            <span className="text-sm text-gray-100">
              (0 reviews{1 > 1 ? "s" : ""})
            </span>
          </div>
          <p className="text-2xl font-semibold font-rubik text-primary">
            {product?.price}
          </p>
          <p className="text-gray-100 max-lg:text-sm min-h-40">
            {product?.description}
          </p>
          <div className="flex items-center gap-3">
            <p className="font-medium font-rubik">Quantity</p>
            <div className="flex items-center">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="size-10 flex items-center justify-center border rounded-l hover:bg-gray-20"
              >
                <FiMinus />
              </button>
              <p className="size-10 flex items-center justify-center border-y">
                {quantity}
              </p>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="size-10 flex items-center justify-center border rounded-r hover:bg-gray-20"
              >
                <FiPlus />
              </button>
              <span className="text-gray-100 ml-1">/kg</span>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex mt-10 flex-col lg:flex-row lg:items-center gap-5">
            <button className="flex-1 rounded-sm flex items-center justify-center gap-2 bg-gray-20 p-3 transition font-medium text-gray-100 hover:bg-gray-30">
              <FaHeart className="text-gray-80" /> Save as favorite
            </button>
            <button className="flex-1 bg-primary hover:bg-primary/80 transition text-white rounded-sm p-3 font-medium flex items-center justify-center gap-2">
              <FaCartShopping /> Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="w-full space-y-5 overflow-hidden">
        {/* Tabs */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab("description")}
            className={cn(
              "text-sm font-medium border max-sm:text-xs max-sm:py-[6px] max-sm:px-3 px-4 py-2 rounded-sm",
              activeTab === "description"
                ? "bg-green text-white border-b-2 border-green "
                : "text-gray-100 border-gray-50"
            )}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={cn(
              "text-sm font-medium border max-sm:text-xs max-sm:py-[6px] max-sm:px-3 px-4 py-2 rounded-sm",
              activeTab === "reviews"
                ? "bg-green text-white border-b-2 border-green "
                : "text-gray-100 border-gray-50"
            )}
          >
            Reviews (0)
          </button>
        </div>

        {/* Content */}
        <div className="p-5 rounded-2xl bg-gray-20">
          {activeTab === "description" ? (
            <div className="text-gray-100">{product?.description}</div>
          ) : (
            <div>
              {" "}
              {reviews.length > 0 ? (
                reviews.map((review: any) => (
                  <div key={review.id} className="bg-white p-3 rounded-md">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{review.author}</h4>
                      <div className="text-yellow-500">
                        {"★".repeat(review.rating)}
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{review.text}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="space-y-5 mt-32 mb-20">
        <Title
          badge="Our Products"
          title="Related Products"
          description="Lorem ipsum dolor sit amet consectetur dolor sit amet  consectetur dolor consectetur adipisicing elit."
        />

        <div className="w-full mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data?.slice(0, 8)?.map((product: any) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
