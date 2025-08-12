import Link from "next/link";

export default function Navbar() {
    return (
        <div className="z-5  w-[100%] bg-black/15 h-[7%] backdrop-blur-lg">
        <div className="hidden sm:flex h-[100%] w-[100%] gap-16 text-[20px] font-400 top-0  flex-row justify-center items-center">
            <Link href="/">Home</Link>
            <a href="/dashboard">Dashboard</a>
            <Link href="/portofolio">Portofolio</Link>
            <Link href="/contact">Contact me</Link>
        </div>
        
            
        </div>
    )
}