import Image from "next/image";
import Badge from "../Badge";

const AboutUsSections = () => {
  return (
    <section className="container py-24 flex max-lg:flex-col items-center justify-between gap-10">
      {/* left side */}
      <div className="flex-1 relative rounded-full">
        <Image
          alt="About Us Image"
          src="/about-img.webp"
          width={700}
          height={300}
          className="h-auto rounded-full"
        />

        <div className="bg-white border px-3 max-sm:py-1 py-2 flex items-center justify-center gap-3 max-sm:w-36 max-lg:w-40 w-48 rounded absolute bottom-54 max-sm:bottom-36  right-16">
          <div className="grid grid-cols-2 gap-0.5">
            <p className="bg-green max-lg:size-2 size-3 rounded-full rounded-bl-none"></p>
            <p className="bg-green size-3 max-lg:size-2 rounded-full rounded-tl-none"></p>
            <p className="bg-green size-3 max-lg:size-2 rounded-full rounded-br-none"></p>
            <p className="bg-green size-3 max-lg:size-2 rounded-full rounded-tr-none"></p>
          </div>
          <h1 className="max-lg:text-xs font-medium font-rubik">
            Fresh Harvests
          </h1>
        </div>

        <div className="absolute -bottom-5 max-sm:w-24 max-sm:rounded-sm w-36  right-5 bg-white rounded-xl border border-gray-20 shadow-lg p-2 space-y-2 max-sm:space-y-1">
          <div className="h-28 max-sm:h-16  w-full bg-gray-20 rounded-xl max-sm:rounded-sm">
            <Image
              src="/green-lettuce.png"
              alt="Green Lettuce"
              width={300}
              height={240}
              className="w-full h-28 max-sm:h-16  object-cover rounded-xl"
            />
          </div>
          <div className="space-y-2 text-center">
            <h1 className="max-sm:text-[8px] text-xs font-medium font-rubik">
              Green Lettuce
            </h1>
            <p className="text-xs max-sm:text-[8px] ">$ 2.99</p>
            <p className="w-full max-sm:py-1 py-2 px-4 text-xs max-sm:text-[8px]  border border-gray-50 font-medium max-sm:rounded rounded-md">
              Add to Cart
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1 space-y-5">
        <Badge>About Us</Badge>
        <h2 className="max-sm:text-[8vw] text-4xl font-medium font-rubik">
          About Fresh Harvests
        </h2>
        <p className="text-gray-100 text-sm">
          Welcome to Fresh Harvest, your premier destination for high-quality
          and fresh produce. We are passionate about providing you with the
          finest fruits, vegetables, and salad ingredients to nourish your body
          and delight your taste buds. With a commitment to excellence,
          sustainability, and customer satisfaction, Fresh Harvest is here to
          revolutionize your grocery shopping experience.
        </p>
        <button className="mt-4 py-2 px-4 border transition border-primary hover:bg-primary hover:text-white text-primary font-medium rounded-md">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutUsSections;
