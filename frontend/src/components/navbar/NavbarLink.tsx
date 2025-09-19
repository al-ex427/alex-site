"use client";

import { redirect } from "next/navigation";

interface NavbarLinkProps {
    title: string;
    redirectTarget?: string;
}

function redirectToTarget(target:string) {
    redirect(target)
}

export default function NavbarLink(props:NavbarLinkProps) {
    return (
        <button onClick={() => {
            if (props.redirectTarget) {
                redirectToTarget(props.redirectTarget)
            }

        }} className="flex text-center justify-center items-center rounded-[12px] text-[20px] transition-[125ms] px-[20px] py-[12px] hover:px-[18px] hover:py-[10px]  hover:text-[22px] hover:bg-secondary-light/50 hover:dark:bg-secondary-dark/75">
            <span>{props.title}</span>
            
        </button>
    )
}