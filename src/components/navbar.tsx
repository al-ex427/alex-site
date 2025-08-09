export default function Navbar() {
    return (
        <div className="absolute z-5 gap-16 text-[18px] font-400 top-0 flex flex-row justify-center items-center w-full bg-black/15 h-12 backdrop-blur-lg">
            <a href="/">Home</a>
            <a href="/wiki">Wiki</a>
            <a href="/portofolio">Portofolio</a>
            <a href="/contact">Contact me</a>
        </div>
    )
}