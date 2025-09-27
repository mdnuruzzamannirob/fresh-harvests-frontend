"use client";

import { motion } from "framer-motion";
import { blogPosts, container, item } from "@/constants";
import BlogCard from "../BlogCard";
import Title from "../Title";

const BlogSection = () => {
  return (
    <motion.section
      className="container py-24 space-y-10"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={item}>
        <Title
          badge="Our Blog"
          title="Fresh Harvest Blog"
          description="Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."
        />
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
      >
        {blogPosts?.map((post, index) => (
          <motion.div key={index} variants={item}>
            <BlogCard
              image={post?.image}
              date={post?.date}
              title={post?.title}
              link={post?.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default BlogSection;
