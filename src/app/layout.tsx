import type { Metadata } from "next";
import "./globals.css"


import {Lato} from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";

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

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "al_ex427's page",
  description: "alex's site"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${gg_sans.variable} ${lato.variable} antialiased`}
      >
          <Navbar/> 
          {children}
       
        
      </body>
    </html>
  );
}
