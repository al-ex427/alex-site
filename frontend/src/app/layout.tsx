import type { Metadata } from "next";
import "./globals.css"


import {Inter} from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const gg_sans = localFont({
  src: [
    {
      path: "../../public/assets/fonts/ggsans_Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/ggsans_Medium.woff",
      weight: "600",
      style: "medium",
    },
    {
      path: "../../public/assets/fonts/ggsans_Semibold.woff",
      weight: "800",
      style: "semibold",
    },
    {
      path: "../../public/assets/fonts/ggsans_Bold.woff",
      weight: "900",
      style: "bold",
    },
  ],
  variable: "--font-ggsans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "al_ex427",
  description: "my super cool website"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${inter.variable} ${gg_sans.variable} antialiased`}
      >
          {children}
        
      </body>
    </html>
  );
}
