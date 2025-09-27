"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import Logo from "../Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import AuthForm from "../AuthForm";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useAppSelector } from "@/store/hooks";
import UserMenu from "../UserMenu";

const Header = () => {
  const { token } = useAppSelector((state) => state?.auth);

  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [isClose, setIsClose] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 py-5 z-50 border-b",
        scrolled
          ? "bg-background border-inherit"
          : "bg-transparent border-transparent"
      )}
    >
      <nav className="container flex items-center justify-between">
        {/* Logo Name */}
        <Logo />

        {/* Navigation Links */}
        <ul className=" items-center text-sm hidden lg:flex justify-center gap-8">
          {navLinks?.map((link, index) => (
            <li key={index} className="relative p-1">
              <Link
                href={link.href}
                // className={
                //   pathname === link.href ? "text-green" : "text-inherit"
                // }
              >
                {link.name}
              </Link>
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-1/2 rounded-full",
                  pathname === "/" && link.href === "/"
                    ? "bg-green"
                    : "bg-transparent"
                )}
              ></span>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div
          className={cn(
            "flex items-center max-lg:gap-5 gap-8 ",
            scrolled || pathname !== "/" ? "text-inherit" : "text-white"
          )}
        >
          <button className="flex items-center gap-3">
            <FaHeart /> <span className="hidden lg:block">Favourites</span>
          </button>
          <button className="flex items-center relative gap-3">
            <span className="relative">
              <FaCartShopping />{" "}
              <small className="absolute -top-3 -right-2 bg-red-500 text-white text-[9px] size-4 leading-0 rounded-full flex items-center justify-center">
                3
              </small>
            </span>{" "}
            <span className="hidden lg:block">Cart</span>
          </button>

          <UserMenu />
          <div className={token ? "hidden" : "hidden lg:block"}>
            <Dialog open={isClose} onOpenChange={setIsClose}>
              <DialogTrigger asChild>
                <button className="py-2 px-4 border border-gray-50 rounded-sm">
                  Sign in
                </button>
              </DialogTrigger>
              <DialogContent>
                <VisuallyHidden>
                  <DialogTitle />
                </VisuallyHidden>

                <AuthForm setIsClose={setIsClose} />
              </DialogContent>
            </Dialog>
          </div>

          <Sidebar />
        </div>
      </nav>
    </header>
  );
};

export default Header;
