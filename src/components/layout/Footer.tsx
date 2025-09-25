import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import DownloadApp from "../DownloadApp";
import { footerLinks } from "@/constants";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-20 border-t">
      <div className="container space-y-6 py-6">
        <div className="grid grid-cols-1 mt-6 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-3 justify-between">
            <Logo />
            <DownloadApp />
          </div>

          {/* links */}
          {footerLinks?.map((link, index) => (
            <ul className="space-y-2" key={index}>
              <h3 className="text-lg font-semibold">{`Quick Links ${
                index + 1
              }`}</h3>
              {link.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-100 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}

          <div className="flex flex-col justify-between gap-5">
            <div className="space-y-2 text-sm">
              <h3 className="text-lg font-medium">Contact Us</h3>

              <div className="flex items-center gap-2 text-gray-100">
                <IoCallOutline className="size-6 text-green" /> 1234 5678 90
              </div>
              <div className="flex items-center gap-2 text-gray-100">
                <MdOutlineMail className="size-6 text-green" />{" "}
                freshharvests@gmail.com
              </div>
              <div className="flex items-center gap-2 text-gray-100">
                <MdOutlineLocationOn className="size-6 text-green" /> 123 Market
                Street, City, Country
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Accepted payment methods:</h3>
              <div className="flex items-center gap-1">
                {["visa.webp", "paypal.webp", "apple-pay.png"].map(
                  (icon, index) => (
                    <div
                      key={index}
                      className="h-10 w-16 flex items-center justify-center bg-background rounded-sm"
                    >
                      <Image
                        src={`/${icon}`}
                        alt={`${icon}`}
                        width={48}
                        height={40}
                        className="w-12"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="border w-full"></div>

        <div className="flex items-center justify-between">
          <small className="font-medium">
            © 2024 Fresh Harvests. All rights reserved.
          </small>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="size-8 flex  rounded-full items-center justify-center bg-foreground text-background "
            >
              <FaXTwitter />
            </Link>
            <Link
              href="/"
              className="size-8 flex rounded-full items-center justify-center bg-foreground text-background "
            >
              <FaFacebook />
            </Link>
            <Link
              href="/"
              className="size-8 flex rounded-full items-center justify-center bg-foreground text-background "
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
