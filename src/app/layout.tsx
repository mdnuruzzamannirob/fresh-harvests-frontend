import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NextAuthProvider from "@/providers/NextAuthProvider";
import ReduxProvider from "@/providers/ReduxProvider";

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
  title: "Fresh Harvests",
  description: "A platform for fresh produce",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 1) If token stored in cookie (httpOnly) read it on server:
  // const tokenFromCookie = (await cookies()).get("token")?.value ?? null;

  // 2) create store with preloaded auth token so baseQuery can use it during SSR
  // const preloaded = tokenFromCookie
  //   ? { auth: { token: tokenFromCookie, user: null } }
  //   : undefined;
  // const store = makeStore(preloaded);

  // 3) dispatch the API calls you want prefetched on server
  // store.dispatch(usersApi.endpoints.getUsers.initiate());
  // if you want auth data prefetched, dispatch relevant endpoints too
  // store.dispatch(authApi.endpoints.somePrefetch.initiate())

  // 4) wait for all initiated queries to settle (per-api util thunk)
  // await Promise.all([
  // store.dispatch(usersApi.util.getRunningQueriesThunk()),
  // store.dispatch(authApi.util.getRunningQueriesThunk()),
  // ]);

  // 5) extract state and pass as initialState to client provider
  // const state = store.getState();
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
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
