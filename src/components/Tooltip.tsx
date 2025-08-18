"use client";

interface TooltipProps {
    hovering: boolean
    description?: string
}

export default function Tooltip(props: TooltipProps) {
    return (
        <div className={`absolute text-lg ${props.hovering ? `opacity-100 inline ` : `opacity-0 hidden`} transition-[150ms] w-[250px] bottom-[-24px]`}>
            <span>{props.description}</span>
        </div>
    )
    
}