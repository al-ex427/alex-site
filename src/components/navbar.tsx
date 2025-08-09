export default function Navbar() {
    return (
        <div className="absolute z-5  w-[100%] bg-black/15 h-[5%] backdrop-blur-lg">
        <div className="hidden sm:flex h-[100%] w-[100%] gap-16 text-[18px] font-400 top-0  flex-row justify-center items-center">
            <a href="/">Home</a>
            <a href="/wiki">Wiki</a>
            <a href="/portofolio">Portofolio</a>
            <a href="/contact">Contact me</a>
        </div>
        
            
        </div>
    )
}