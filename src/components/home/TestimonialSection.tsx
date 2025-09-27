"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { testimonialData } from "@/constants";
import Title from "./Title";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // auto loop every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonialData?.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonialData?.[currentIndex];

  return (
    <section className="relative bg-white py-20">
      <div className="container space-y-10">
        <Title
          badge="Testimonial"
          description="Don't just take our word for it—here's what some of our
            customers have to say about their experience with Fresh Harvest:"
          title="  What Our Customers Say"
        />

        <div className="flex items-center lg:flex-row flex-col justify-between lg:gap-20 gap-10  relative overflow-hidden min-h-96">
          <AnimatePresence mode="wait">
            {/* Image */}
            <motion.div
              key={currentTestimonial?._id + "-img"}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex-1"
            >
              <Image
                src={currentTestimonial?.image}
                alt={currentTestimonial?.name}
                width={220}
                height={220}
                className="rounded-full size-full bg-gray-20"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              key={currentTestimonial?._id + "-text"}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className=" flex-[2]"
            >
              <span className=" text-7xl text-primary">❝</span>

              <div className="bg-gray-20 space-y-5 w-full rounded-2xl p-5">
                <p className="text-gray-100 leading-relaxed">
                  {currentTestimonial?.message}
                </p>

                <div className=" flex items-center capitalize gap-1">
                  <p className="font-medium  font-rubik">
                    {currentTestimonial?.name} -
                  </p>
                  <p className="text-gray-100 text-sm">
                    {currentTestimonial?.role}
                  </p>
                </div>
              </div>

              <div className="text-7xl text-primary flex items-center justify-end">
                <span className="rotate-180">❝</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`size-4 rounded-full transition ${
                index === currentIndex ? "bg-green" : "bg-gray-50"
              }`}
            />
          ))}
        </div>

        {/* Decoration */}
        {/* <Image
          src="/leaf-left.png"
          alt=""
          width={50}
          height={50}
          className="absolute left-10 top-20 opacity-70"
        />
        <Image
          src="/leaf-right.png"
          alt=""
          width={50}
          height={50}
          className="absolute right-10 bottom-20 opacity-70"
        /> */}
      </div>
    </section>
  );
};

export default TestimonialSection;
