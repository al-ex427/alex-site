import type { Metadata } from "next";
import "./globals.css"
import Navbar from "@/components/navbar";





export const metadata: Metadata = {
  title: "Create Next App",
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
