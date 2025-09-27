import Image from "next/image";
import Badge from "../Badge";
import DownloadApp from "../DownloadApp";

const Banner = () => {
  return (
    <section className="relative min-h-dvh flex items-center bg-gray-20 max-sm:py-16  py-24 overflow-hidden">
      {/* Rise Side Background */}
      <div className="absolute top-0 right-0 h-full w-4/11 bg-no-repeat bg-cover bg-right max-sm:w-1/3 bg-[url('/bg.jpeg')]" />

      {/* Floating Banner Image */}
      <Image
        alt="Banner Image"
        src="/banner-img.png"
        width={500}
        height={3000}
        className="absolute bottom-0 max-sm:-right-10 right-0 xl:right-10 z-10 w-4/5 sm:w-3/5 lg:w-1/2 xl:w-2/5 2xl:2/6 h-auto"
      />

      {/* content */}
      <div className="space-y-8 container z-10">
        <Badge> Welcome to Fresh Harvests</Badge>
        <h1 className="font-medium font-rubik max-sm:text-[11vw] text-7xl">
          Fresh Fruits <br className="min-lg:hidden" /> and{" "}
          <br className="max-lg:hidden" /> Vegetables
        </h1>
        <p className="text-sm text-gray-100 max-sm:w-full w-lg">
          At Fresh Harvests, we are passionate about providing you with the
          freshest and most flavorful fruits and vegetables.
        </p>
        <button className="bg-primary z-10 px-4 py-2 rounded font-medium text-white">
          Shop Now
        </button>

        {/* Offer Box */}
        <div className="w-full flex relative">
          <div className="hidden sm:block pl-40 relative">
            <Image
              alt="Fresh Vegetables"
              src="/arrow.svg"
              width={100}
              height={100}
              className="scale-x-[-1] absolute rounded-full -top-8 right-0 -rotate-45"
            />
          </div>
          <div className="bg-gray-30 flex w-fit gap-5 items-center rounded-xl max-sm:px-3 px-5 py-3">
            <div className="font-rubik leading-tight">
              <p className="text-sm max-sm:text-xs text-[#176D38] font-semibold">
                Special Offer
              </p>
              <h3 className="text-3xl max-sm:text-xl font-medium">
                Fresh Salad
              </h3>
              <p className="relative max-sm:text-sm mb-3 font-semibold text-[#176D38]">
                Up to{" "}
                <span className="text-foreground">
                  <span className="relative inline-flex -rotate-6 items-center justify-center max-sm:w-9 max-sm:h-5 w-12 h-7 border-2 border-primary bg-transparent [border-radius:50%_50%_45%_45%/50%_50%_45%_45%] max-sm:text-lg text-2xl font-medium">
                    <span className="rotate-6">70%</span>
                  </span>{" "}
                  Off
                </span>
              </p>
              <button className="rounded-full bg-[#176D38] font-medium text-sm text-white max-sm:text-xs px-3 py-1">
                CODE: <span className="text-[#FAC714]">FRESH25</span>
              </button>
            </div>
            <Image
              alt="Fresh Salad"
              src="/fresh-salad.png"
              width={150}
              height={150}
              className="max-sm:size-24"
            />
          </div>
        </div>

        <DownloadApp />
      </div>
    </section>
  );
};

export default Banner;
