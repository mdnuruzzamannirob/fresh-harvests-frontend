import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NextAuthProvider from "@/providers/NextAuthProvider";
import ReduxProvider from "@/providers/ReduxProvider";
import { Toaster } from "@/components/ui/sonner";
import { getProfileServer } from "@/lib/getProfileServer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fresh Harvests | Organic Fruits & Vegetables Online",
  description:
    "Fresh Harvests brings you the best organic fruits and vegetables online. Explore our fresh produce, seasonal specials, and healthy choices for your family.",
  openGraph: {
    title: "Fresh Harvests | Organic Fruits & Vegetables Online",
    description:
      "Fresh Harvests brings you the best organic fruits and vegetables online. Explore our fresh produce, seasonal specials, and healthy choices for your family.",
    url: "/",
    siteName: "Fresh Harvests",
    images: [
      {
        url: "/home.png", // homepage og image
        width: 1200,
        height: 630,
        alt: "Fresh Harvests Home",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh Harvests | Organic Fruits & Vegetables Online",
    description:
      "Fresh Harvests brings you the best organic fruits and vegetables online. Explore our fresh produce, seasonal specials, and healthy choices for your family.",
    images: ["/home.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await getProfileServer();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.className} ${geistMono.variable} ${rubik.variable} antialiased`}
      >
        <ReduxProvider>
          <NextAuthProvider>
            <Header />
            {children}
            <Footer />
            <Toaster closeButton richColors />
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
