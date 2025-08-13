import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found!11 LOL",
  description: "Page not found"
};

export default function NotFound() {
    return (
        <>
        <div className="page">
            <Link href="/" className="bg-white w-[225px] rounded-full h-[64px] content-center text-black text-2xl font-bold">Return home</Link>
        </div>
        </>
    );
}