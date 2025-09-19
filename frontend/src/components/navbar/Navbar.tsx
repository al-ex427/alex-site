"use client";

import NavbarLink from "./NavbarLink";

export default function Navbar() {
    return (
        <div className="flex flex-row fixed h-[76px] p-[12px] w-full">
            <div className="navbar flex justify-between drop-shadow-[8px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.15)] bg-primary-light/85 dark:bg-primary-dark/75 h-full w-full border-primary-outline-light/75 dark:border-primary-outline-dark/75">
                <div className="flex justify-start w-[386px] flex-row px-[4px] py-[4px] gap-[4px]">
                    <NavbarLink redirectTarget="/" title="Home"/>
                    <NavbarLink redirectTarget="/about" title="About me"/>
                </div>

                <div className="flex justify-end w-[386px] flex-row px-[4px] py-[4px] gap-[4px]">
                    <NavbarLink title="Login via Discord"/>
                </div>
                
            </div>
        </div>

    )
}
