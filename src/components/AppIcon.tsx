import Image from "next/image";

interface AppIconProps {
    iconSrc: string;
    iconUrl?:string;
    width?: string;
    height?: string;
}

export default function AppIcon(props: AppIconProps) {
    return (
        <a href={props.iconUrl} className={`flex w-18 h-18 rounded-2xl bg-black items-center justify-center`}>
            <Image src={props.iconSrc} alt="Application Icon" unoptimized></Image>
        </a>
    )
}