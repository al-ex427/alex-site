import Link from "next/link";
import { ReactNode } from "react";

interface NavbarLinkProps {
    url:string ;
    className?:string;
    children?: Readonly<ReactNode>;
    
}

// NOTE: USE CLASSNAME FOR HOVER COLOR ACCENT
export default function NavbarLink(props:NavbarLinkProps) {
    return (
        <Link href={props.url} className={`font-medium flex h-full  flex-row justify-center items-center gap-2 text-lg text-white hover:font-bold hover:text-[22px] transition-[150ms] ${props.className}`}>
            {props.children}
            
        </Link>
    )
}
