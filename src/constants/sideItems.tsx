import { TSideItems } from "@/types";
import { AiOutlineHome } from "react-icons/ai";

export const sideItems: TSideItems[] = [
  {
    name: "Home",
    path: "/",
    icon: <AiOutlineHome className="size-4" />,
  },
  {
    name: "Shop",
    path: "/products",
    icon: null,
  },
  {
    name: "About Us",
    path: "/about-us",
    icon: null,
  },
  {
    name: "Blog",
    path: "/blog",
    icon: null,
  },
];
