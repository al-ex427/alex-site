"use client";

import Image from "next/image";
import { useState } from "react";

interface DiscordUserWidgetProps {
    userID: number;
    
}


export default function DiscordUserWidget(props: DiscordUserWidgetProps) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(null);
    return (
        <div className="w-[100%] animate-pulse font-(family-name:--font-ggsans) h-auto min-h-[50%] rounded-xl bg-discord-ash">
            <Image src={null}></Image>
        </div>
    )
}
