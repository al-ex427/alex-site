"use client";
import { useEffect, useRef, useState } from "react"

export default function Navbar() {
    return (
        <div className="fixed w-full h-[72px] top-0 pt-[10px] pb-[10px] pl-[6px] pr-[6px]">
            <div className="navbar">
                <h1>Current mouse pos: N/A</h1>
            </div>
        </div>
    )
}
