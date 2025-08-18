"use client";
import Image from "next/image";
import Tooltip from "./Tooltip";
import { useState } from "react";

interface AppIconProps {
    iconSrc: string;
    iconDescription?: string;
    iconUrl?:string;
    iconClassName?:string;
    className?:string;
}

export default function AppIcon(props: AppIconProps) {
    const [hover,setHover] = useState(false)
    return (
        <a href={props.iconUrl}
        onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=> setHover(false)}
        data-tooltip-id="tooltip" data-tooltip-content={props.iconDescription}
        className={`relative flex w-18 h-18 p-2 rounded-2xl bg-trueblack-900 items-center justify-center ${props.className}`}
        >
            <Image src={props.iconSrc} width={0} height={0} className={`w-full h-full ${props.className}`} alt="Application Icon" unoptimized></Image>    
            <Tooltip hovering={hover} description={props.iconDescription}/>
        </a>

        
        
    )
}