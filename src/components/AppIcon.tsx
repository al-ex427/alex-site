"use client";
import Image from "next/image";
import Tooltip from "./Tooltip";
import { ReactNode, useState } from "react";


interface AppIconProps {
    iconSrc: string;
    iconColor: string; // SYNTAX: bg-[#color] or any other tailwind css way 
    iconScale:number;
    iconDescription?: string;
    iconUrl?:string;
    className?:string;
    iconClassName?:string;
    children?: Readonly<ReactNode>
}

export default function AppIcon(props: AppIconProps) {
    const [hover,setHover] = useState(false)
    return (
        <a href={props.iconUrl}
        onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=> setHover(false)}
        data-tooltip-id="tooltip" data-tooltip-content={props.iconDescription}

        className={`relative flex w-18 h-18 rounded-2xl transition-125ms ${props.iconColor} items-center justify-center ${props.className}`}
        >   
            <Image src={props.iconSrc} style={{scale: props.iconScale}} width={0} height={0} className={`w-full h-full trans ${props.iconClassName}`} alt="Application Icon" unoptimized></Image>  
            <Tooltip hovering={hover} description={props.iconDescription}/>
            {props.children}
        </a>

        
        
    )
    
}