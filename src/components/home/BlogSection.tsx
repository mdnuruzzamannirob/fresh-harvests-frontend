import { blogPosts } from "@/constants";
import BlogCard from "../BlogCard";
import Title from "../Title";

const BlogSection = () => {
  return (
    <section className="container py-24 space-y-10">
      <Title
        badge="Our Blog"
        title="Fresh Harvest Blog"
        description="Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts?.map((post, index) => (
          <BlogCard
            key={index}
            image={post?.image}
            date={post?.date}
            title={post?.title}
            link={post?.link}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
