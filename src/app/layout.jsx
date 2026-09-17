import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

import localFont from "next/font/local";
import NextAuthProvider from "@/provider/NextAuthProvider";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const fontBangla = localFont({
  src: "./../fonts/mayaboti-normal.ttf",
  // weight: [],
});

export const metadata = {
  metadataBase: new URL("https://hero-kidz-theta-three.vercel.app"),

  title: {
    default: "Hero Kidz | Educational Toys for Kids",
    template: "%s | Hero Kidz",
  },

  description:
    "Discover educational, fun, and engaging toys for kids at Hero Kidz.",

  keywords: [
    "Hero Kidz",
    "kids toys",
    "educational toys",
    "learning toys",
    "children toys",
    "baby toys",
  ],

  authors: [{ name: "Hero Kidz" }],
  creator: "Hero Kidz",
  publisher: "Hero Kidz",

  icons: {
    icon: "https://ibb.co.com/hk2zprN",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hero Kidz",

    title: "Hero Kidz | Educational Toys for Kids",

    description:
      "Discover educational, fun, and engaging toys for kids at Hero Kidz.",

    url: "https://hero-kidz-theta-three.vercel.app",

    images: [
      {
        url: "https://ibb.co.com/nsXFfB05",
        width: 1200,
        height: 630,
        alt: "Hero Kidz - Educational Toys for Kids",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Hero Kidz | Educational Toys for Kids",

    description:
      "Discover educational, fun, and engaging toys for kids at Hero Kidz.",

    images: ["https://ibb.co.com/nsXFfB05"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>
          <header className="py-5 md:w-11/12 mx-auto">
            <Navbar></Navbar>
          </header>

          <main className="py-10 md:w-11/12 mx-auto min-h-[calc(100vh-302px)]">
            {children}
          </main>

          <footer>
            <Footer></Footer>
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
