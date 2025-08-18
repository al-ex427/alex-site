"use client";

interface TooltipProps {
    hovering: boolean
    description?: string
}

export default function Tooltip(props: TooltipProps) {
    return (
        <>
        {props.description && (
                <div className={`z-1 flex flex-col justify-center content-center absolute text-lg bg-white/0.5 backdrop-blur-lg px-8 h-[32px] rounded-lg
                ${props.hovering ? `opacity-100 pointer-events-auto` : `opacity-0 pointer-events-none`} text-nowrap transition-[150ms] bottom-[-24px]`}>
                        <span className="text-[16px] w-full h-auto">{props.description}</span>
                </div>
        )}
        
        </>
       
    )
    
}