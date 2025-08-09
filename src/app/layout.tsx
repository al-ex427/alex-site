import type { Metadata } from "next";
import "./globals.css"
import Navbar from "@/components/navbar";





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
        className={`antialiased`}
      >
        <Navbar/>
        {children}
        
      </body>
    </html>
  );
}
