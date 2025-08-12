
interface AppIconProps {
    iconSrc: string;
    width?: string;
    height?: string;
}

export default function AppIcon(props: AppIconProps) {
    return (
        <div className={`flex w-18 h-18 rounded-2xl bg-black items-center justify-center`}>
            <img src={props.iconSrc} fetchPriority="low" loading="lazy" decoding="async"></img>
        </div>
    )
}