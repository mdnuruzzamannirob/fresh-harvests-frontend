"use client";

import Badge from "@/components/Badge";
import ProductCard from "@/components/ProductCard";
import Title from "@/components/Title";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { FiPlus, FiMinus } from "react-icons/fi";

const DynamicProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );

  const description = `
  Our coconuts are sustainably grown, ensuring the best quality and taste. Each coconut is handpicked and carefully prepared, offering you the freshest product possible. Rich in healthy fats, electrolytes, and essential nutrients, coconuts provide both hydration and nourishment. Whether you’re using the water, flesh, or milk, our coconuts bring versatility to your kitchen while supporting healthy living.
  
  Perfect for smoothies, desserts, curries, and more — let the natural sweetness of the coconut elevate your recipes. Enjoy the tropical goodness in its purest form, directly from nature.
  `;

  const reviews = [
    {
      id: 1,
      author: "John Doe",
      rating: 5,
      text: "Amazing coconuts! Super fresh and delicious. Will order again.",
    },
  ];

  const product = {
    category: "Fruits",
    name: "Coconut",
    price: "$6.3/kg",
    rating: 5.0,
    reviews: 1,
    description:
      "From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.",
    images: ["/green-lettuce.png", "/green-lettuce.png", "/green-lettuce.png"],
  };

  const data = [
    {
      id: "67514a611cdb919fe028cf09",
      productName: "Banana",
      description:
        "Bananas are elongated, yellow fruits with a sweet, creamy flesh, commonly eaten fresh or used in smoothies, desserts, and baked goods. They are rich in nutrients like potassium, vitamin C, and dietary fiber, making them a popular and healthy snack worldwide.",
      price: 20.99,
      stock: 50,
      images: ["https://i.ibb.co.com/cyCs2B7/banana.jpg"],
      categoryId: "6751516f9c52879c1fde6558",
      isDeleted: false,
      createdAt: "2024-12-05T06:38:25.687Z",
      updatedAt: "2024-12-05T06:38:25.687Z",
    },
    {
      id: "675153ac1cdb919fe028cf0a",
      productName: "Coconut",
      description:
        "Coconut is a versatile tropical fruit widely used in culinary dishes and beverages. It offers various edible parts, including the water, tender flesh, and mature meat. Coconut can be consumed fresh, dried, or processed into products like coconut oil, milk, cream, and flour. Its mildly sweet flavor and rich texture make it a popular ingredient in both savory and sweet dishes, particularly in Asian, Caribbean, and tropical cuisines. Additionally, it's valued for its nutritional benefits, providing healthy fats, fiber, and essential minerals like potassium and magnesium.",
      price: 200,
      stock: 50,
      images: ["https://i.ibb.co.com/pWpwg7h/coconut.jpg"],
      categoryId: "6751516f9c52879c1fde6558",
      isDeleted: false,
      createdAt: "2024-12-05T07:18:04.783Z",
      updatedAt: "2024-12-06T09:54:40.366Z",
    },
    {
      id: "675154d81cdb919fe028cf0b",
      productName: "Guava",
      description:
        "Guava is a tropical fruit known for its sweet and tangy flavor, often enjoyed fresh, juiced, or in desserts. It has a soft, edible skin and a juicy interior filled with tiny seeds. Guava is rich in vitamin C, fiber, and antioxidants, making it a nutritious choice. Its unique taste and aroma make it a popular ingredient in smoothies, jams, and salads, as well as in savory dishes in some cuisines. Guava is also prized for its health benefits, including boosting immunity and aiding digestion.",
      price: 20,
      stock: 500,
      images: ["https://i.ibb.co.com/J7CXmBQ/Guava.png"],
      categoryId: "6751516f9c52879c1fde6558",
      isDeleted: false,
      createdAt: "2024-12-05T07:23:04.640Z",
      updatedAt: "2024-12-06T09:56:22.205Z",
    },
    {
      id: "6751559b1cdb919fe028cf0c",
      productName: "Pomegranate",
      description:
        "Pomegranate is a nutrient-rich fruit prized for its vibrant red seeds, known as arils, which are juicy, sweet, and slightly tart. It is often eaten fresh, added to salads, or used in juices, sauces, and desserts. Pomegranate is a powerhouse of antioxidants, vitamins (especially vitamin C), and fiber, contributing to numerous health benefits, including improved heart health and reduced inflammation. Its bold flavor and visual appeal make it a favorite in both savory and sweet dishes across various cuisines.",
      price: 100,
      stock: 200,
      images: ["https://i.ibb.co.com/3p2VXxn/pomegrate.webp"],
      categoryId: "6751516f9c52879c1fde6558",
      isDeleted: false,
      createdAt: "2024-12-05T07:26:19.680Z",
      updatedAt: "2024-12-06T09:57:55.466Z",
    },
  ];

  return (
    <main className="min-h-dvh space-y-10 container py-20 lg:py-28">
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
                  src={product.images[activeIndex]}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex  justify-center gap-2">
            {product.images.map((_, index) => (
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
          <Badge>{product.category}</Badge>

          <h1 className="text-3xl font-medium font-rubik ">{product.name}</h1>

          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500 text-lg">{"★★★★★"}</div>
            <span className=" font-rubik font-medium">
              {product.rating.toFixed(1)}
            </span>
            <span className="text-sm text-gray-100">
              ({product.reviews} review{product.reviews > 1 ? "s" : ""})
            </span>
          </div>

          <p className="text-2xl font-semibold font-rubik text-primary">
            {product.price}
          </p>

          <p className="text-gray-100 max-lg:text-sm min-h-40">
            {product.description}
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
            Reviews ({reviews.length})
          </button>
        </div>

        {/* Content */}
        <div className="p-5 rounded-2xl bg-gray-20">
          {activeTab === "description" ? (
            <div className="text-gray-100">{description}</div>
          ) : (
            <div>
              {" "}
              {reviews.length > 0 ? (
                reviews.map((review) => (
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
          {data?.slice(0, 8)?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};
export default DynamicProduct;
