"use client";

interface ButtonProps {
    text?: string;
    onclick?: ()=>void;
}

export default function Button(props: ButtonProps) {
    return (
        <button className="px-[18px] transition-all backdrop-blur-[4px] ease-[cubic-bezier(0.22, 1, 0.36, 1)] h-[48px] border-[2px] hover:scale-110 rounded-[12px] hover:border-[2.25px] hover:border-primary-outline-light/85 border-primary-outline-light/65 bg-linear-180 transition-[225ms] from-primary-light/75 to-secondary-light/50 hover:bg-linear-180 hover:from-primary-light/95 hover:to-secondary-light/75">
            <span className="text-[18px] font-semibold">{props.text}</span>
        </button>
    )
}