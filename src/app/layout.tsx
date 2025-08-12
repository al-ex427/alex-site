import type { Metadata } from "next";
import "./globals.css"

import Navbar from "@/components/navbar";

import {Lato} from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "al_ex427's page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${lato.variable} antialiased`}
      >
        <Navbar/>
        {children}
        
      </body>
    </html>
  );
}
