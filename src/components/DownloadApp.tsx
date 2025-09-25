import Image from "next/image";

const DownloadApp = () => {
  const data = [
    {
      img: "apple.png",
      description: "Download on the",
      title: "App Store",
    },
    {
      img: "play-store.png",
      description: "Get IT ON",
      title: "Google Play",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
      {data.map((item, index) => (
        <div
          className="flex p-1 bg-foreground rounded text-white items-center gap-1"
          key={index}
        >
          <Image
            src={`/${item.img}`}
            alt={item.title}
            width={24}
            height={24}
            className="size-6"
          />
          <div className="font-rubik">
            <p className="text-[8px] ">{item.description}</p>
            <h3 className="font-medium text-sm leading-4"> {item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DownloadApp;
