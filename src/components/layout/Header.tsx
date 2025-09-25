"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { FaCartShopping, FaHeart } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 py-4 z-50 bg-transparent border-b">
      <nav className="container flex items-center justify-between">
        {/* Logo Name */}
        <div className="text-2xl font-bold flex items-center gap-3">
          <p className="size-10 bg-gray-50 rounded-xl"></p>
          <h1>Fresh Harvests</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center justify-center gap-8">
          {navLinks?.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-8">
          <button className="flex items-center gap-3">
            <FaHeart /> Favourites
          </button>
          <button className="flex items-center relative gap-3">
            <span className="relative">
              <FaCartShopping />{" "}
              <small className="absolute -top-3 -right-2 bg-red-500 text-white text-[9px] size-4 leading-0 rounded-full flex items-center justify-center">
                3
              </small>
            </span>{" "}
            Cart
          </button>
          <button className="py-2 px-4 border border-gray-50 rounded-sm">
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
