import type { Metadata } from "next";
import "./globals.scss";
import { Montserrat } from "next/font/google";
import AppFooter from './components/AppFooter';

export const metadata: Metadata = {
  title: "alex's site",
  description: "a shitass website i made",
};

const montserrat =  Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",

});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className}`}>
      <link rel="icon" type="image/svg+xml" href="/assets/icons/alex.svg" />
      <body className={``}>
        {children}
        <AppFooter/>
      </body>
    </html>
  );
}
