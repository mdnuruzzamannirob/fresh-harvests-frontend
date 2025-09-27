// components/BlogCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  link: string;
}

export default function BlogCard({ image, date, title, link }: BlogCardProps) {
  return (
    <div className="flex flex-col gap-5">
      {/* Image */}
      <div className="rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Content */}
      <div>
        <p className="text-gray-100 text-sm">{date}</p>
        <Link href={link}>
          <h3 className="my-3 text-lg font-medium font-rubik">{title}</h3>
        </Link>

        <Link
          href={link}
          className=" group flex w-fit items-center gap-3 text-primary font-medium"
        >
          <span className="group-hover:underline">Read More</span>
          <span className="text-lg">
            <IoMdArrowForward />
          </span>
        </Link>
      </div>
    </div>
  );
}
