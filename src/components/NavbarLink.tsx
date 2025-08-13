import Link from "next/link";
import { ReactNode } from "react";

interface NavbarLinkProps {
    url:string ;
    children?: Readonly<ReactNode>;
    className?:string;
}

export default function NavbarLink(props:NavbarLinkProps) {
    return (
        <Link href={props.url} className={`font-semibold flex flex-row justify-center items-center gap-2 text-lg text-white hover:text-blue-400  hover:text-2xl transition-[150ms] ${props.className}`}>
            {props.children}
        </Link>
    )
}