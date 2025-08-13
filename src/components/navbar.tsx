import Link from "next/link";
import { FaB, FaBars } from "react-icons/fa6";

export default function Navbar() {
    return (
        <div className="fixed flex top-0 z-5 w-[100%] border-b-1 border-b-white/25 bg-black/20 h-[64px] backdrop-blur-lg">
        <div className="hidden topbar:flex h-[100%] w-[100%] gap-16 text-[20px] font-400 flex-row justify-center items-center">
            <Link href="/">Home</Link>
            <a href="/dashboard">Dashboard</a>
            <Link href="/portofolio">Portofolio</Link>
            <Link href="/contact">Contact me</Link>
        </div>

        <div className="topbar:hidden flex h-[100%] w-[100%] gap-16 text-[20px] font-400 flex-row justify-center items-center">
            <button><FaBars/></button>
        </div>
        
            
        </div>
    )
}