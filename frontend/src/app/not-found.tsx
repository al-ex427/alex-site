import Link from "next/link";
import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Not Found!11 LOL",
  description: "Page not found"
};

export default function NotFound() {
    return (
        <>
        <div className="page">
            <h1 className="text-6xl font-black">Page not found</h1>
            <Button text="return"/>
        </div>
        </>
    );
}