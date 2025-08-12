import Link from "next/link";

export default function Navbar() {
    return (
        <div className="absolute z-5 w-[100%] border-b-1 border-b-white/25 bg-black/15 h-[7%] backdrop-blur-lg">
        <div className="flex h-[100%] w-[100%] gap-16 text-[20px] font-400 flex-row justify-center items-center">
            <Link href="/">Home</Link>
            <a href="/dashboard">Dashboard</a>
            <Link href="/portofolio">Portofolio</Link>
            <Link href="/contact">Contact me</Link>
        </div>
        
            
        </div>
    )
}