import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <div className="grid grid-cols-2 gap-0.5">
        <p className="bg-green max-lg:size-3 size-4 rounded-full rounded-bl-none"></p>
        <p className="bg-green size-4 max-lg:size-3 rounded-full rounded-tl-none"></p>
        <p className="bg-green size-4 max-lg:size-3 rounded-full rounded-br-none"></p>
        <p className="bg-green size-4 max-lg:size-3 rounded-full rounded-tr-none"></p>
      </div>
      <h1 className="max-lg:text-lg text-2xl font-bold">Fresh Harvests</h1>
    </Link>
  );
};

export default Logo;
