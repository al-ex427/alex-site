
import { FaBars, FaHouse, FaMoneyBill, FaSuitcase } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
    return (
        <div className="fixed flex top-0 z-5 w-[100%] border-b-1 border-b-white/25 bg-black/20 h-[64px] backdrop-blur-lg">
        <div className="hidden topbar:flex h-[100%] w-[100%] gap-16 text-[20px] flex-row justify-center items-center">
            <NavbarLink url="/"><FaHouse/><span className="">Home</span></NavbarLink>
            <NavbarLink className="hover:text-green-300" url="/commisions"><FaMoneyBill/><span>Commisions</span></NavbarLink>
            <NavbarLink className="hover:text-yellow-300" url="/portofolio"><FaSuitcase/><span>Portofolio</span></NavbarLink>
            <NavbarLink className="hover:text-blue-300" url="/contact"><MdMessage/><span>Contact me</span></NavbarLink>
        </div>

        <div className="topbar:hidden flex h-[100%] w-[100%] gap-16 text-[20px] font-400 flex-row justify-center items-center">
            <button><FaBars/></button>
        </div>
        
            
        </div>
    )
}