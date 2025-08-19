"use client";

interface TooltipProps {
    hovering: boolean
    description?: string
}

export default function Tooltip(props: TooltipProps) {
    return (
        <>
        {props.description && (
                <div className={`z-1 flex flex-col justify-center content-center absolute text-lg bg-white/2.5 backdrop-blur-2xl px-4 h-[32px] rounded-lg
                ${props.hovering ? `bottom-[-36px] scale 1  pointer-events-auto` : `bottom-0 scale-0  pointer-events-none`} text-nowrap transition-[125ms] `}>
                        <span className="text-[16px] w-full h-auto">{props.description}</span>
                </div>
        )}
        
        </>
       
    )
    
}