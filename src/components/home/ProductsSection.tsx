"use client";

import { useState } from "react";
import Title from "../Title";
import ProductCard from "../ProductCard";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ProductsSection = () => {
  const [tab, setTab] = useState("all");

  const tabData = [
    { name: "All", value: "all" },
    { name: "Fruits", value: "fruits" },
    { name: "Vegetables", value: "vegetables" },
    { name: "Salads", value: "salads" },
  ];

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
    <section className="container py-24 flex items-center justify-center flex-col gap-5 text-center ">
      <Title
        badge="Our Products"
        description="We offer a wide variety of fresh and frozen fruits, vegetables, and salad ingredients."
        title="Our Fresh Products"
      />

      <div className="flex items-center justify-center max-sm:gap-2 gap-5">
        {tabData.map((item, index) => (
          <button
            onClick={() => setTab(item.value)}
            key={index}
            className={cn(
              "text-sm font-medium border max-sm:text-xs max-sm:py-[6px] max-sm:px-3 px-4 py-2 rounded-sm",
              tab === item.value
                ? "bg-green text-white border-b-2 border-green "
                : "text-gray-100 border-gray-50"
            )}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="w-full mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data?.slice(0, 8)?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href="/products"
        className="mt-4 py-2 px-4 border transition border-primary hover:bg-primary hover:text-white text-primary font-medium rounded-md"
      >
        See All Products
      </Link>
    </section>
  );
};

export default ProductsSection;
