"use client";

import Image from "next/image";
import Badge from "../Badge";
import { motion } from "framer-motion";
import { container, item } from "@/constants";

const SpecialOfferSection = () => {
  return (
    <motion.section
      className="relative bg-gray-20 py-16 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto flex flex-row items-center justify-between relative z-10">
        {/* LEFT CONTENT */}
        <motion.div className="space-y-5 max-w-xl" variants={item}>
          <motion.div variants={item}>
            <Badge>Special Offer</Badge>
          </motion.div>

          <motion.h2
            className="max-sm:text-[8vw] text-5xl font-medium font-rubik"
            variants={item}
          >
            Seasonal Fruit Bundle
          </motion.h2>

          <motion.h3
            className="max-sm:text-[7vw] text-3xl font-medium font-rubik"
            variants={item}
          >
            Discount up to{" "}
            <span className="text-primary font-semibold">80% OFF</span>
          </motion.h3>

          <motion.div className="flex gap-5" variants={item}>
            {["03 Days", "18 Hour", "54 Min", "21 Second"].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white shadow-md rounded-md p-3 text-center min-w-[60px]"
              >
                <p className="text-2xl font-bold">{item.split(" ")[0]}</p>
                <p className="text-sm text-gray-500">{item.split(" ")[1]}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CODE BUTTON */}
          <motion.button
            className="rounded-full bg-[#176D38] font-semibold text-lg text-white max-sm:text-xs px-6 py-2"
            variants={item}
          >
            CODE: <span className="text-[#FAC714]">FRESH28</span>
          </motion.button>
        </motion.div>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 -right-28"
        variants={item}
      >
        <Image
          alt="Offer Image"
          src="/offer-img.png"
          width={500}
          height={400}
          className="max-w-full lg:w-[800px] object-contain"
        />
      </motion.div>

      {/* BACKGROUND DECORATION */}
      <div
        className="absolute inset-0 w-1/2 h-auto opacity-10 bg-repeat bg-center"
        style={{ backgroundImage: "url('/bg-pattern.png')" }}
      />
    </motion.section>
  );
};

export default SpecialOfferSection;
