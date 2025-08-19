
import NavbarLink from "./NavbarLink";
import { MdInsertPhoto } from "react-icons/md";
import { FaBriefcase, FaHouse, FaMoneyBill } from "react-icons/fa6";
import { RiMessage3Fill } from "react-icons/ri";

export default function Navbar() {
    return (
        <div className="fixed flex top-0 z-5 w-[100%] border-b-1 border-b-white/25 bg-black/20 h-[64px] backdrop-blur-lg">
        <div className="flex justify-start pl-4 gap-4"> {/*hidden topbar1:flex h-[100%] w-[100%] gap-16 text-[20px] pl-8 flex-row justify-start*/}
            <NavbarLink url="/" icon={FaHouse}>Home</NavbarLink>
            <NavbarLink icon={MdInsertPhoto} className="hover:text-pink-400" url="/gallery">Gallery</NavbarLink>
            <NavbarLink icon={FaMoneyBill} className="hover:text-green-400" url="/commisions">Commisions</NavbarLink>
            <NavbarLink icon={FaBriefcase} className="hover:text-yellow-100"  url="/portofolio">Portofolio</NavbarLink>
            <NavbarLink icon={RiMessage3Fill} className="hover:text-blue-200" url="/contact">Contact</NavbarLink>
        </div>


        
            
        </div>
    )
}