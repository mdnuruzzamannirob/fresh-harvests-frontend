import Image from "next/image";
import Badge from "../Badge";

const SpecialOfferSection = () => {
  return (
    <section className="relative bg-gray-20 py-16 overflow-hidden">
      <div className="container mx-auto flex flex-row items-center justify-between relative z-10">
        {/* LEFT CONTENT */}
        <div className="space-y-5 max-w-xl">
          <Badge>Special Offer</Badge>

          <h2 className="max-sm:text-[8vw] text-5xl font-medium font-rubik">
            Seasonal Fruit Bundle
          </h2>

          <h3 className="max-sm:text-[7vw] text-3xl font-medium font-rubik">
            Discount up to{" "}
            <span className="text-primary font-semibold">80% OFF</span>
          </h3>

          <div className="flex gap-5">
            {["03 Days", "18 Hour", "54 Min", "21 Second"].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-md p-3 text-center min-w-[60px]"
              >
                <p className="text-2xl font-bold">{item.split(" ")[0]}</p>
                <p className="text-sm text-gray-500">{item.split(" ")[1]}</p>
              </div>
            ))}
          </div>

          {/* CODE BUTTON */}
          <button className="rounded-full bg-[#176D38] font-semibold text-lg text-white max-sm:text-xs px-6 py-2">
            CODE: <span className="text-[#FAC714]">FRESH28</span>
          </button>
        </div>
      </div>
      {/* RIGHT IMAGE */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-28">
        <Image
          alt="Offer Image"
          src="/offer-img.png"
          width={500}
          height={400}
          className="max-w-full lg:w-[800px] object-contain"
        />
      </div>
      {/* BACKGROUND DECORATION */}
      <div
        className="absolute inset-0 w-1/2 h-auto opacity-10 bg-repeat bg-center"
        style={{ backgroundImage: "url('/bg-pattern.png')" }} // upload a pattern or use existing one
      />
    </section>
  );
};

export default SpecialOfferSection;
