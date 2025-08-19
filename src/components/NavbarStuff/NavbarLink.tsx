import Link from "next/link";
import { ReactNode } from "react";
import { IconType } from "react-icons";

interface NavbarLinkProps {
    url:string ;
    icon?:IconType
    className?:string;
    children?: Readonly<ReactNode>;
    
}

// NOTE: USE CLASSNAME FOR HOVER COLOR ACCENT
export default function NavbarLink(props:NavbarLinkProps) {
    const CurIcon = props.icon
    return (
        <Link href={props.url} 
        className={`group p-2 font-medium flex h-full origin-center flex-row justify-center min-w-[48px] items-center gap-2 text-lg text-white hover:font-bold hover:text-[22px] transition-[150ms] 
        ${props.className}`}>
            {CurIcon && (
                <CurIcon/>
            )}
        {props.children}
            
        </Link>
    )
}
